import { useContext, type ComponentProps, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { FormStateContext } from "./FormContainer";
import { produce } from "immer";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../utils/utils";
import { Button } from "./Button";
import { PersonSchema } from '../models/Models';
import { Plane } from "../utils/svgComponents";

interface PersonFormProps extends ComponentProps<"div">{
  onNext: () => void;
  onPrevious: () => void;
  step: number;
}

export const PersonForm = ({onNext, onPrevious, step, className}: PersonFormProps) => {
  const { form, setForm } = useContext(FormStateContext);
  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    control, 
    // watch
  } = useForm({
    // shouldUseNativeValidation: true,
    resolver: zodResolver(PersonSchema),
    defaultValues: {
      fName: form.steps.person.value.fName,
      sName: form.steps.person.value.sName,
      email: form.steps.person.value.email,
      phone: form.steps.person.value.phone,
    },
    mode: 'all'
  });
  const { isDirty } = useFormState({
    control,
  });

  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.person.dirty = isDirty
      })
    );
  }, [isDirty, setForm]);

  const onSubmit = (value: {fName:string, sName:string, email:string, phone:string}) => {
    setForm(
      produce((formState) => {
        formState.steps.person = {
          value,
          valid: true,
          dirty: false,
        }
      })
    );

    onNext();
  }

  const classes = cn('flex  flex-col w-full space-y-8', className);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>

      <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr]  gap-x-4 gap-y-2 sm:gap-x-6 ">

        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-slate-500">
          <label htmlFor="fName" className="block font-medium relative py-1">Name</label>
          <div className="">
            <input id="fName" type="text" {...register("fName", {required: true})}
              required
              autoComplete="given-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="sName" className="block font-medium relative py-1" >
            Surname
          </label>
          {errors.sName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.sName?.message}</p>}

          <div className="">
            <input id="sName" type="text" {...register("sName", {required: true})}
              required
              autoComplete="family-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
        </div>
        <div className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="email" className="block font-medium relative py-1">
            Email

          </label>

          <div className="">
            <input id="email" type="text" {...register("email", {required: true})}
              required
              autoComplete="email"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-gray-500">
          <label htmlFor="phone" className="block font-medium relative py-1">
            Phone

          </label>

          <div className="">
            <input id="phone" type="text" {...register("phone", { required: true })}
              required
              autoComplete="tel"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.phone?.message}</p>}
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
  );
}