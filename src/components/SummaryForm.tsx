import { useContext, type ComponentProps } from "react";
import { Button } from "./Button";
import { FormStateContext } from "./FormContainer";
import { capitalizeFirstLetter } from "../utils/utils";
import { LoadingIcon } from "../utils/svgComponents";

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


  return <form className="space-y-12 w-full" onSubmit={(e) => {e.preventDefault(); onNext()}} >
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

  const summaryClasses = 'grid grid-cols-1   gap-2 gap-y-3 text-xl';
  const titleClasses = "block relative font-medium text-base text-gray-500 py-1.5";
  const entryClasses = 'flex flex-col text-base font-normal text-gray-400 ';
  let valueClasses = '';

  const includedKeys = [
    "fName", "sName", "email", "phone", 
    "manufacturer", "model", "year", "mileage", 
    "registrationNumber", "yearOfManufacture", "engineCapacity", "make", "model", "colour"];

  const formatKeys = (key: string) => {
    switch(key) {
      case 'fName': return "Name";
      case 'sName': return "Surname";
      case 'email': return "Email";
      case 'phone': return "Phone";
      case 'registrationNumber': return 'Reg';
      case 'manufacturer':
      case 'make': return 'Make';
      case 'yearOfManufacture': return 'Year';
      case 'engineCapacity': return 'Engine';
      case 'motExpiryDate': return 'MOT';
      case 'taxDueDate': return 'Tax';
      case 'mileage': return 'Mileage';
      case 'colour': return 'Colour';
      case 'model': return 'Model';
      default: return key;
    }
  }

    return (
      <div className={summaryClasses}>
        <div className="summary-title font-semibold text-primary w-full col-span-full row-start-1 ">Summary</div>
        {
          Object.keys(steps).map((step) => {
            if(!form.px && step === 'partExchange' || step === 'finished') return null;
            const currentStep = steps[step]; 
            
            if (currentStep && typeof currentStep === 'object') {

              // Type guard: currentStep is an object
              return (
                <div className="text-base  sm:data-[col-2=true]:col-start-9 sm:data-[col-2=true]:col-span-8 sm:data-[col-2=true]:row-start-2 sm:data-[col-2=true]:row-span-2 col-start-1 sm:col-span-8" key={step} data-col-2={step === 'partExchange' || (step === 'car' && !form.px) }>
                  <div className={titleClasses}>
                    {step.charAt(0).toUpperCase() + step.slice(1)}
                  </div>
                  <div className="px-5 py-5 space-y-2 bg-slate-100 rounded-md ring-slate-200 ring-inset ring-1">
                    {          
                      Object.entries(currentStep.value).filter(step => {console.log(step); return includedKeys.includes(step[0])}).map(([key,value], index) => (
                        
                        // applies class for regular css file (for wrapping)
                        valueClasses += key ==="email"?  " email":"",
                        value = typeof value === 'string'? capitalizeFirstLetter(value) : value,
                        
                        <div key={index}  className={entryClasses}>
                          <div className="text-gray-400 font-medium">{formatKeys(key)}</div>
                          <div className={valueClasses}>
                            {value}
                          </div>

                        </div>
                      )
                      )
                    }
                  </div>
                </div>
              );
            }
            return null; // Return null if currentStep is not an object
          })
        }
      </div>
    );
};