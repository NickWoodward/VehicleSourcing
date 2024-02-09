import { useCallback, useContext, type ComponentProps, useRef, useLayoutEffect, useState, type FormEvent } from 'react';
import { FormStateContext } from './FormContainer';
import { produce } from 'immer';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { PersonForm } from './PersonForm';
import { CarForm } from './CarForm';
import { Plane, Tick } from '../utils/svgComponents';
import React from 'react';
import { SummaryForm } from './SummaryForm';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { FormSchema } from '../models/Models';

interface Props extends ComponentProps<"div"> {
  steps: Array<{label:string}>
};

export const MultiStepForm = ({steps}: Props) => {
  const { form, setForm } = useContext(FormStateContext);
  const [responseMessage, setResponseMessage] = useState("");

  const turnstileRef = useRef<TurnstileInstance>(null);
  const formWrapperRef = useRef(null); 
  const sectionRef = useRef(document.querySelector('.section.contact'));
  const NUM_STEPS = 3;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: .4
        },
        paused: true
      });
      
      tl.from(formWrapperRef.current, {
        autoAlpha:0, y:5, ease: "power4.inOut", duration: .7
      });
  
      ScrollTrigger.create({
        trigger: formWrapperRef.current,
        start: "top 65%",
        end: "90% top",
        // markers:true,
        onEnter: () => { 
          tl.play(0);
        },
        // onLeaveBack: () => tl.reverse()
      });    

      ScrollTrigger.create({
        trigger:formWrapperRef.current,
        start: "top bottom",
        end: "90% top",
        // markers:true,
        onLeaveBack: () => {
          tl.reverse();
        }
      });
  
    }, sectionRef);

    return () => {
      ctx.revert();
    }
  }, []);

  
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

  const completeForm = async () => {
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
        }
      }
    } = nextState;

    const data = {turnstile, personValues, carValues};
    console.log('DATA', data);

    const response = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify({
        ...data
      }),
    });
    // const result = await response.json();
    // if (result.message) {
    //   setResponseMessage(result.message);
    // }
    console.log('COMPLETE', response);
  }

  return (
    <div ref={formWrapperRef} className="multistep-form flex flex-col lg:py-0 space-y-6">
      <Tabs selectedIndex={selectedIndex}>
        {steps.map((step, index) => {
          const canSelectStep = Object.values(form.steps)
            .slice(0, index)
            .every((step) => {
              return step.valid && !step.dirty
            });

          return (
            <React.Fragment key={index}>
              {index!==0 && <div 
                data-active={selectedIndex === index}
                data-selectable={canSelectStep}
                data-last={index===steps.length-1}
                className="tab-line data-[active=false]:data-[selectable=false]:bg-slate-300 grow data-[last=true]:hidden data-[last=true]:sm:flex h-1 bg-primary" 
              ></div>}
              <Tab
                key={index}
                data-last={index===steps.length-1}
                className='data-[last=true]:hidden data-[last=true]:sm:flex'
                onSelect={() => {
                  if (canSelectStep) {
                    setSelectedIndex(index);
                  }
                }}
              >
                <div 
                  data-active={selectedIndex === index}
                  data-selectable={canSelectStep}
                  className="data-[active=true]:outline data-[active=false]:data-[selectable=false]:bg-slate-300 flex justify-center items-center bg-primary outline-offset-2  outline-primary text-white rounded-full w-7 h-7">
                    {index===steps.length-1? <Tick className='flex items-center justify-center w-9 h-9'/>:index+1}
                </div>
                <div className="flex justify-center text-sm sm:text-base lg:text-xl items-center pl-3.5">
                  {step.label}
                </div>
              </Tab>

            </React.Fragment>
          );
        })}
      </Tabs>

      <div className="bg-slate-50  px-6 xs:px-8 sm:px-10 pb-8 xs:pb-10 pt-4 xs:pt-6 shadow-md rounded ">
        { form.selectedIndex === 0 && <PersonForm onNext={nextFormStep} onPrevious={previousFormStep} /> }
        { form.selectedIndex === 1 && <CarForm onNext={nextFormStep} onPrevious={previousFormStep} /> }
        { form.selectedIndex === NUM_STEPS - 1 && <SummaryForm onNext={completeForm}/>}
      </div>
      <div className="privacy-link text-sm lg:text-base xl:text-lg md:text-gray-600">
          We care about the protection of your data. Read our
          <a href="#" className="font-medium pl-1.5 lg:text-gray-900 underline">Privacy Policy</a>.
        </div>
        {/* <div className="panel">
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </div> */}
        {/* <TurnstileWidget turnstileRef={turnstileRef} /> */}
        <Turnstile ref={turnstileRef} siteKey='1x00000000000000000000AA' />

    </div>
  );
};
