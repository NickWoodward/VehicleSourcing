import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, type ComponentProps, useEffect, useState, type FormEvent } from "react";
import { useForm, useFormState } from "react-hook-form";
import { PartExchangeSchema } from "../models/Models";
import { FormStateContext } from "./FormContainer";
import { produce } from "immer";
import { capitalizeFirstLetter, cn } from "../utils/utils";
import { Button } from "./Button";
import { Plane } from "../utils/svgComponents";
import {$registration} from '../store/store';

interface FormProps extends ComponentProps<"div">{
  onNext: () => void;
  onPrevious: () => void;
  step: number;
  placeholder: string;
  setPlaceholder: (value: string) => void;
}

export const PartExchangeForm = ({onNext, onPrevious, placeholder, setPlaceholder, step, className}: FormProps) => {
  const { form, setForm } = useContext(FormStateContext);
  const [numberplate, setNumberplate] = useState<string>('');

  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    control, 
    watch
  } = useForm({
    // shouldUseNativeValidation: true,
    resolver: zodResolver(PartExchangeSchema),
    defaultValues: {
      model: form.steps.partExchange.value.model,
      mileage: form.steps.partExchange.value.mileage,
    },
    mode: 'all'
  });
  const { isDirty } = useFormState({
    control,
  });

  const handleRegSubmit = async (e:FormEvent) => {
    e.preventDefault();
    $registration.set(numberplate);

  }

  const onSubmit = (value: {model:string, mileage:string}) => {
    setForm(
      produce((formState) => {
        formState.steps.partExchange.value.model = value.model;
        formState.steps.partExchange.value.mileage = value.mileage;
        formState.steps.partExchange.valid = true;
        formState.steps.partExchange.dirty = false;
      })
    );

    onNext();
  };

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.partExchange.dirty = isDirty
      })
    );
  }, [isDirty, setForm]);

  // Reg plate change handler
  const changeHandler = (e:FormEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    setNumberplate(target.value?.toUpperCase())
  }

  const classes = cn('flex  flex-col w-full space-y-8', className);
  return (
    <>
      {/* <form onSubmit={() => {console.log("SUBMITTED"); $registration.set(numberplate)}}
      >
        <div className="relative mb-3 sm:row-start-1 sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="model" className="block relative py-1.5">Registration</label>
          <input   
            className="cta-btn--hero placeholder-gray-700 text-center font-numberplate outline outline-1 outline-gray-500 space-x-3 px-6 h-[45px] xl:h-[50px] 3xl:h-[60px] w-[160px] xl:w-[180px] 3xl:w-[200px] py-3 xl:py-4 bg-yellow text-gray-800 rounded text-[1.5rem] 3xl:text-[1.7rem] 3xl:leading-10"
            name="reg"
            value={numberplate}
            onChange={changeHandler}
            onFocus={() => setPlatePlaceholder("")}
            onBlur={() => {
              setPlatePlaceholder(numberplate);

            }}
            placeholder={platePlaceholder}
          />
        </div>
      </form> */}

    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
    
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-16 lg:grid-cols-1 sm:grid-rows-[min-content-fit_1fr] sm:gap-x-8 md:gap-x-0  gap-y-1  ">

        <div className="relative mb-3 sm:row-start-1 sm:col-span-1 sm:col-start-1 md:col-span-6 text-base lg:text-lg font-medium w-full text-gray-500">
            <label htmlFor="model" className="block relative py-1.5">Registration</label>
            <input   
              className="cta-btn--hero placeholder-gray-700 text-center font-numberplate outline outline-1 outline-gray-500 space-x-3 px-6 h-[45px] xl:h-[50px] 3xl:h-[60px] w-[160px] xl:w-[180px] 3xl:w-[200px] py-3 xl:py-4 bg-yellow text-gray-800 rounded text-[1.5rem] 3xl:text-[1.7rem] 3xl:leading-10"
              name="reg"
              value={numberplate}
              onChange={changeHandler}
              onKeyDown={(e) => e.key === "Enter" && handleRegSubmit(e)}
              onFocus={() => setPlaceholder("")}
              onBlur={(e) => {
                numberplate? setPlaceholder(numberplate): setPlaceholder("ENTER REG");
                handleRegSubmit(e);

              }}
              
              placeholder={placeholder}
            />
        </div>

        <div className="relative sm:row-start-2 sm:col-span-1 sm:col-start-1 md:col-span-6 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="model" className="block relative py-1.5">Model</label>
          <div className="">
            <input id="model" type="text" {...register("model", {required: true})}
              required
              autoComplete="given-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.model && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.model?.message}</p>}
        </div>
        <div className="relative sm:row-start-3 sm:col-span-1 md:col-span-6 sm:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="mileage" className="block relative py-1.5">Mileage</label>
          <div className="">
            <input id="mileage" type="text" {...register("mileage", {required: true})}
              required
              autoComplete="given-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.mileage && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.mileage?.message}</p>}
        </div>

        <div className="dvla-summary  mt-6 sm:mt-0 md:col-start-8 md:col-span-12 sm:row-start-1 sm:row-span-5">
          <label className="block relative font-medium text-gray-500 py-1.5">Car Details</label>
          <div className="px-5 py-5 space-y-2 bg-slate-100 rounded-md ring-slate-200 ring-inset ring-1">   
            {
            Object.entries(form.steps.partExchange.value).filter(([key]) => ["registrationNumber", "yearOfManufacture",  "make", "colour", "engineCapacity"].includes(key)).map(([key, value]) => {
              let label;
              switch(key) {
                case 'registrationNumber': label = 'Reg'; break;
                case 'make': label = 'Make'; break;
                case 'yearOfManufacture': label = 'Year'; break;
                case 'engineCapacity': label = 'Engine'; break;
                default : label = capitalizeFirstLetter(key);
              }
              return (
                <div key={key} className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg  w-full text-gray-400">
                  <div className="flex flex-col">
                    <div 
                      className="flex flex-col leading-4 xs:flex-row justify-between w-full rounded text-base "
                    >
                      <div className=" font-normal py-1">{label}:</div>
    
                      {
                        key === "engineCapacity"?
                        <div>{value}cc</div>:<div>{value}</div>
                      }
                    </div>
                  </div>
              </div>
              )
            })
          }
          </div>
        </div>
      </div>
     
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
          disabled={!isValid}
          rounded="md"
          intent="primary"
          className="ml-auto sm:ml-0 sm:w-auto w-full disabled:bg-slate-300  px-8 py-2.5 md:py-3 xl:py-4 text-base lg:text-xl"
        >
          {/* <Tick className="h-6 w-6 flex-none" /> */}
          Next
          <Plane className="hidden ml-3 h-5 w-5 flex-none" />

        </Button>
      </div>
    </form>
    </>
  );
}