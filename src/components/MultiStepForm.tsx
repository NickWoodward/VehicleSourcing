import { useCallback, useContext, type ComponentProps, useRef, useState } from 'react';
import React from 'react';
import { FormStateContext } from './FormContainer';
import { produce } from 'immer';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { Toaster, toast } from "sonner";

import { useStore } from '@nanostores/react';
import {$registration} from '../store/store';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { PersonForm } from './PersonForm';
import { CarForm } from './CarForm';
import { Tick } from '../utils/svgComponents';
import { SummaryForm } from './SummaryForm';
import { PartExchangeForm } from './PartExchangeForm';
import { sleep } from '../utils/utils';

interface Props extends ComponentProps<"div"> {
  steps: Array<{label:string}>
};

export const MultiStepForm = ({steps}: Props) => {
  const { form, setForm } = useContext(FormStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isError, setIsError] = useState(false);
  const [pxPlaceholder, setPxPlaceholder] = useState(form.steps.partExchange.value.registrationNumber ? form.steps.partExchange.value.registrationNumber : "ENTER REG");

  const $reg = useStore($registration);

  const turnstileRef = useRef<TurnstileInstance>(null);
  const formWrapperRef = useRef(null); 
  // const sectionRef = useRef(document.querySelector('.section.contact'));
  const NUM_STEPS = form.px? steps.length:steps.length-1;

  // If PX registration
  console.log($reg, form.steps.partExchange.value.registrationNumber)
  if($reg !== form.steps.partExchange.value.registrationNumber) { 
    console.log("rendering....", {$reg}, form.steps.partExchange.value.registrationNumber);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dvla", {
          method: "POST",
          body: JSON.stringify({
            numberplate: $reg
          }),
        });
        const {success, data} = await response.json();
        if(success == false) throw new Error("Error in DVLA API");
        
        const nextState = produce(form, (draft) => {
          draft.steps.partExchange.value = data;
          draft.px = true;
        });
        
        setForm(nextState);
        setPxPlaceholder(() => $reg);
        toast(`${nextState.steps.partExchange.value.colour} ${nextState.steps.partExchange.value.make} (${$reg}) Found:`);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    }
    fetchData();
  }

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       defaults: {
  //         duration: .4
  //       },
  //       paused: true
  //     });
      
  //     tl.from(formWrapperRef.current, {
  //       autoAlpha:0, y:5, ease: "power4.inOut", duration: .7
  //     });
  
  //     ScrollTrigger.create({
  //       trigger: formWrapperRef.current,
  //       start: "top 65%",
  //       end: "90% top",
  //       // markers:true,
  //       onEnter: () => { 
  //         tl.play(0);
  //       },
  //       // onLeaveBack: () => tl.reverse()
  //     });    

  //     ScrollTrigger.create({
  //       trigger:formWrapperRef.current,
  //       start: "top bottom",
  //       end: "90% top",
  //       // markers:true,
  //       onLeaveBack: () => {
  //         tl.reverse();
  //       }
  //     });
  
  //   }, sectionRef);

  //   return () => {
  //     ctx.revert();
  //   }
  // }, []);

  
  const nextFormStep = useCallback(() => {
    // if (stepIndex + 1 >= NUM_FORM_STEPS) return;
    setForm(
      produce((form) => {
        form.selectedIndex += 1;
      })
    );
    toast.success("Form Saved");
  }, [setForm]);

  const previousFormStep = useCallback(() => {
    // if (stepIndex < 1) return;
    setForm(
      produce((form) => {
        form.selectedIndex -= 1;
      })
    );
  }, [setForm]);

  const setSelectedIndex = useCallback(
    (index: number) => {
      setForm(
        produce((form) => {
          form.selectedIndex = index;
        })
      );
    },
    [setForm]
  );
  const selectedIndex = form.selectedIndex;

  const resetForm = () => {
    setForm(
      produce((form) => {
        form.selectedIndex = 0;
        form.px = false;
        form.turnstile = form.turnstile;
        form.steps.person.valid = false;
  
        form.steps.car.valid = false;
        form.steps.car.dirty = false;
        form.steps.car.value.manufacturer = '';
        form.steps.car.value.model = '';
        form.steps.car.value.year = '';
        form.steps.car.value.mileage = '';

        form.steps.partExchange.valid = false;
      })
    );
    setIsComplete(false);  
  };

  const completeForm = async () => {
    setIsLoading(true);
    const turnstileResponse = turnstileRef.current?.getResponse();
    if(!turnstileResponse) {
      turnstileRef.current?.reset();
      return;
    }

    const nextState = produce(form, (draft) => {draft.turnstile = turnstileResponse});
    setForm(nextState);

    const {
      turnstile,
      steps: { 
        person: {
          value: personValues
        },
        car: {
          value: carValues
        },
        partExchange: {
          value: pxValues
        }
      }
    } = nextState;

    const data = {turnstile, personValues, carValues, pxValues};


    try {
      // const response = await sleep(4000);
      await fetch("/api/enquiry", {
        method: "POST",
        body: JSON.stringify({
          ...data
        }),
      });
      setIsLoading(false);
      setIsComplete(true);
      toast.success("Form Submitted");
      await sleep(5000)
      resetForm();

    } catch(err) {
      setIsError(true);
      console.log(err);
    }
  }

  const checkboxHandler = () => {
    setForm(
      produce((form) => {
        form.px = !form.px;
        const msg = form.px ? "Px added" : "Px removed";
        if(form.px) 
          toast.info(msg,{style:{padding:"2px", border:"2px", width:"200px", boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);", color:"var(--primary)"}});
        else 
          toast.info(msg,{style:{padding:"2px", border:"2px", width:"200px", boxShadow:"0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);", color:"var(--primary)"}});
      })
    );

  }

  return (
    <div ref={formWrapperRef} className="multistep-form xs:max-w-[450px] sm:max-w-none mx-auto rounded-tl-3xl  flex flex-col items-start w-full  justify-between lg:py-0 space-y-6   ">
            
             
      <div className='flex flex-col justify-start w-full  h-full '>
        <label  className="space-x-3 py-1 flex items-center text-sm cursor-pointer">

          <div className="flex items-center justify-center w-7 h-7">
            <input 
              checked={form.px}

              onClick={checkboxHandler}
              type="checkbox" 
              className='peer overflow-visible w-4 h-4 appearance-none bg-slate-200 border-2 border-slate-300 rounded accent-primary text-white shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-primary checked:border-0 disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer' 
            /> 
            <Tick className='absolute w-4 h-4 -translate-y-0.5 pointer-events-none hidden peer-checked:block stroke-blue-50 mt-1 outline-none' strokeWidth="4"/>
          </div>

          <div className="text-slate-400 text-base">Add a Part Exchange?</div>
        </label>

      </div>
            
      <div className="flex  flex-col w-full mx-auto    space-y-8 lg:space-y-5 ">

        <div className="relative bg-slate-50 flex w-full space-y-8 px-6 xs:px-8 sm:px-10  lg:px-8 pb-8 xs:pb-10 pt-14 xs:pt-14 shadow-md rounded-br-3xl ">
          <Tabs selectedIndex={selectedIndex}>
            {steps.map((step, index) => {
              console.log({step}, !form.px)
              if(step.label === "Px" && !form.px) {
                return null;
              }
              const canSelectStep = Object.values(form.steps)
                .slice(0, index)
                .every((formStep) => {
                  return formStep.valid && !formStep.dirty
                });

              return (
                <React.Fragment key={step.label}>
                  {index!==0 && <div 
                    data-active={selectedIndex === index}
                    data-selectable={canSelectStep}
                    data-last={index===NUM_STEPS-1}
                    className="hidden tab-line  grow  " 
                  ></div>}
                  <Tab
                    key={step.label}
                    data-active={selectedIndex === index}
                    data-last={index===NUM_STEPS-1}
                    data-selectable={canSelectStep}
                    closeable={step.label === "Px"}
                    className=' '
                    onSelect={() => {
                      if (canSelectStep) {
                        setSelectedIndex(index);
                      }
                    }}
                  >
          
                    <div className="flex  text-sm sm:text-base ">
                      {step.label}
                    </div>
                  </Tab>

                </React.Fragment>
              );
            })}
            

          </Tabs> 
          { !isComplete && form.selectedIndex === 0 && <CarForm onNext={nextFormStep} onPrevious={previousFormStep} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === 1 && <PersonForm onNext={nextFormStep} onPrevious={previousFormStep} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === 2 && form.px && <PartExchangeForm onNext={nextFormStep} onPrevious={previousFormStep} placeholder={pxPlaceholder} setPlaceholder={setPxPlaceholder} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === NUM_STEPS  && <SummaryForm onNext={completeForm} loading={isLoading} step={form.selectedIndex} onPrevious={previousFormStep} />}
          { isComplete && <div>Complete</div> }
          { isError && <div>Error</div> }
          <div className="absolute -top-0 right-0  -translate-y-[8rem] translate-x-[9rem] flex h-[1rem] ">
            <Toaster position="top-right" richColors  />
          </div>

        </div>
        
        <div className="privacy-link text-sm lg:text-base lg:ml-auto lg:mr-2 md:text-gray-600">
            We care about the protection of your data. Read our
            <a href="#" className="font-medium pl-1.5 lg:text-gray-900 underline">Privacy Policy</a>.
        </div>

        <Turnstile className='ml-auto ' ref={turnstileRef} siteKey='1x00000000000000000000AA' />
      </div>
        
      
    </div>
  );
};