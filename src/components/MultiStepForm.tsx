import { useCallback, useContext, type ComponentProps, useRef, useState } from 'react';
import { FormStateContext } from './FormContainer';
import { produce } from 'immer';
import { useStore } from '@nanostores/react';
import {$registration} from '../store/store';

// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { PersonForm } from './PersonForm';
import { CarForm } from './CarForm';
import { Tick } from '../utils/svgComponents';
import React from 'react';
import { SummaryForm } from './SummaryForm';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
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
  if($reg !== form.steps.partExchange.value.registrationNumber) {
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
        setPxPlaceholder(() => $reg)
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
      })
    )
  }

  return (
    <div ref={formWrapperRef} className=" multistep-form flex flex-col md:flex-row justify-between lg:py-0 space-y-4 md:space-y-0 ">
      <Tabs selectedIndex={selectedIndex}>
        {steps.map((step, index) => {
          console.log({step}, !form.px)
          if(step.label === "Part Exchange" && !form.px) {
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
                className="hidden tab-line data-[active=false]:data-[selectable=false]:bg-slate-300 grow  " 
              ></div>}
              <Tab
                key={step.label}
                data-active={selectedIndex === index}
                data-last={index===NUM_STEPS-1}
                data-selectable={canSelectStep}
                closeable={step.label === "Part Exchange"}
                className='flex-col w-[28%] '
                onSelect={() => {
                  if (canSelectStep) {
                    setSelectedIndex(index);
                  }
                }}
              >
                <div 
                  data-active={selectedIndex === index}
                  data-selectable={canSelectStep}
                  className="data-[active=true]:outline  flex justify-center items-center bg-primary outline-offset-2  data-[active=true]:outline-primary data-[active=false]:data-[selectable=false]:bg-slate-400 data-[active=false]:data-[selectable=false]:outline text-white rounded-sm w-7 h-7">
                    {index+1}   
                </div>
                <div className="flex justify-center text-sm sm:text-base lg:text-xl items-center ">
                  {step.label}
                </div>
              </Tab>

            </React.Fragment>
          );
        })}
        
        {
          !form.px &&
          <div className='flex items-center px-3 py-2'>
            <label  className="flex items-center text-base cursor-pointer">

              <div className="flex items-center justify-center w-7 h-7">
                <input 
                  defaultChecked={form.px}
                  onClick={checkboxHandler}
                  type="checkbox" 
                  className='peer overflow-visible w-6 h-6 appearance-none bg-slate-200 border-2 border-slate-300 rounded accent-primary text-white shrink-0 focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-blue-100 checked:bg-primary checked:border-0 disabled:border-steel-400 disabled:bg-steel-400 cursor-pointer' 
                /> 
                <Tick className='absolute w-4 h-4 -translate-y-0.5 pointer-events-none hidden peer-checked:block stroke-blue-50 mt-1 outline-none' strokeWidth="4"/>
              </div>

              {/* <svg
                className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg> */}
              <div className="ml-3.5">Part Ex?</div>
            </label>

          </div>
        }
      </Tabs>
      <div className="flex flex-col space-y-6 md:w-4/6">
        <div className="bg-slate-50  px-6 xs:px-8 sm:px-10 md:px-8 pb-8 xs:pb-10 pt-4 xs:pt-6 shadow-md rounded">
          { !isComplete && form.selectedIndex === 0 && <CarForm onNext={nextFormStep} onPrevious={previousFormStep} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === 1 && <PersonForm onNext={nextFormStep} onPrevious={previousFormStep} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === 2 && form.px && <PartExchangeForm onNext={nextFormStep} onPrevious={previousFormStep} placeholder={pxPlaceholder} setPlaceholder={setPxPlaceholder} step={form.selectedIndex} /> }
          { !isComplete && form.selectedIndex === NUM_STEPS  && <SummaryForm onNext={completeForm} loading={isLoading} step={form.selectedIndex} onPrevious={previousFormStep} />}
          { isComplete && <div>Complete</div> }
          { isError && <div>Error</div> }
        </div>
        
        <div className="privacy-link text-sm lg:text-base xl:text-lg md:text-gray-600">
            We care about the protection of your data. Read our
            <a href="#" className="font-medium pl-1.5 lg:text-gray-900 underline">Privacy Policy</a>.
        </div>
    
        <Turnstile className='ml-auto ' ref={turnstileRef} siteKey='1x00000000000000000000AA' />

      </div>
        
      
    </div>
  );
};