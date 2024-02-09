import { useContext, type ComponentProps, type FormEvent } from "react";
import { Button } from "./Button";
import { FormStateContext } from "./FormContainer";
import { capitalizeFirstLetter } from "../utils/utils";

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
}

export const SummaryForm = ({onNext}:SummaryFormProps) => {
  return <form onSubmit={(e) => {e.preventDefault(); onNext()}} >
    <Summary/>
    <Button 
      type="submit" 
      rounded="md" 
      intent="primary"
      className="ml-auto  px-8 py-2.5 md:py-3 xl:py-4 text-base lg:text-xl"
  >
    Submit
    </Button>
  </form>;
};

const Summary =  () => {
  const { form } = useContext(FormStateContext);
  const steps: FormSteps = form.steps;

  if(!steps) return;

  const summaryClasses = 'flex flex-col gap-4';
  const titleClasses = 'font-medium underline mb-1.5';
  const valueClasses = 'text-sm';

      return (
        <div className={summaryClasses}>
          {Object.keys(steps).map((step, index) => {
            const currentStep = steps[step]; 
    
            if (currentStep && typeof currentStep === 'object') {
              // Type guard: currentStep is an object
              return (
                <div key={step}>
                  <div className={titleClasses}>
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </div>
                  {Object.values(currentStep.value).map((value, index) => (
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