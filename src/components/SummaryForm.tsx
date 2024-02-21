import { useContext, type ComponentProps, type FormEvent, useState } from "react";
import { Button } from "./Button";
import { FormStateContext } from "./FormContainer";
import { capitalizeFirstLetter } from "../utils/utils";
import { LoadingIcon } from "../utils/svgComponents";
import { produce } from "immer";

interface FormSteps {
  [key: string]: {
    valid: boolean,
    dirty: boolean,
    value: {
      [key: string]: string | number | boolean;
    },
  }
}

interface SummaryFormProps extends ComponentProps<"div">{
  onNext: () => void;
  onPrevious: () => void;
  loading: boolean;
  step: number;
}

export const SummaryForm = ({onNext, onPrevious, step, loading}:SummaryFormProps) => {
  const [numberplate, setNumberplate] = useState<string>('');
  const [platePlaceholder, setPlatePlaceholder] = useState("ENTER REG");
  const {form, setForm} = useContext(FormStateContext);
  const handleRegSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setForm(
      produce((formState) => {
        formState.steps.partExchange.value.registrationNumber = e.currentTarget.value
      })
    );    
    scrollToContact();
  }

  const scrollToContact = () => {
    // querySelector used because no shared react component
    const contact = document.querySelector('.contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  }

  return <form className="space-y-12" onSubmit={(e) => {e.preventDefault(); onNext()}} >
      <Summary />
      
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  space-y-3 sm:space-y-0 space-y-reverse sm:space-x-8">
        
        <Button
          type="button"
          variant="ghost"
          size="none"
          onClick={() => onPrevious()}
          disabled={step === 0}
          className="w-full sm:w-auto ml-auto px-8 py-2.5 sm:px-4  disabled:text-gray-300 text-base lg:text-xl"
        >
          Back
        </Button>

        <Button 
          type="submit"
          rounded="md"
          intent="primary"
          className="ml-auto sm:ml-0 sm:w-auto w-full disabled:bg-slate-300  px-8 py-2.5 md:py-3 xl:py-4 text-base lg:text-xl"
        >
        {loading ? <LoadingIcon /> : 'Submit'}
      
      </Button>
    </div>
  </form>;
};

const Summary =  () => {
  const { form } = useContext(FormStateContext);
  const steps: FormSteps = form.steps;

  if(!steps) return;

  // const splitEmail = (value: string): [string, string] => {

  //   if(typeof value !== 'string') return value;
  //   const [username, domain] = value.split(/@/);
  //   return [username, "@", domain];
  // }

  const summaryClasses = 'grid   gap-4';
  const titleClasses = 'underline underline-offset-4 text-gray-600 mb-1.5 text-base lg:text-lg font-semibold';
  let valueClasses = 'text-sm font-normal text-gray-500';

      return (
        <div className={summaryClasses}>
          {Object.keys(steps).map((step, index) => {
            if(!form.px && step === 'partExchange' || step === 'finished') return null;
            const currentStep = steps[step]; 
            
            if (currentStep && typeof currentStep === 'object') {
              

              // Type guard: currentStep is an object
              return (
                <div className=" sm:data-[col-2=true]:col-start-2 sm:data-[col-2=true]:row-start-1 sm:data-[col-2=true]:row-span-2 col-start-1 md:odd:w-3/5" key={step} data-col-2={step === 'partExchange'}>
                  <div className={titleClasses}>
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </div>
                  {Object.entries(currentStep.value).map(([key,value], index) => (
                    // applies class for regular css file (for wrapping)
                    valueClasses += key ==="email"?  " email":"",
                    value = typeof value === 'string'? capitalizeFirstLetter(value) : value,
                    <p key={index} className={valueClasses}>
                      {value}     
                    </p>
                  ))}
                </div>
              );
            }
            return null; // Return null if currentStep is not an object
          })}
        </div>
      );
};