import { useContext, type ComponentProps, useEffect } from "react";
import { useForm, useFormState } from "react-hook-form";
import { FormStateContext } from "./FormContainer";
import { produce } from "immer";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../utils/utils";
import { Button } from "./Button";
import { PersonSchema } from '../models/Models';

interface PersonFormProps extends ComponentProps<"div">{
  onNext: () => void;
  onPrevious: () => void;
}

export const PersonForm = ({onNext, onPrevious, className}: PersonFormProps) => {
  const { form, setForm } = useContext(FormStateContext);
  const {
    register, 
    handleSubmit, 
    formState: { errors, isValid },
    control, 
    watch
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
console.log("formState", errors, isValid);
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

  const classes = cn('space-y-10', className);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 sm:grid-rows-[min-content-fit_1fr] gap-x-3 gap-y-1 sm:gap-x-6 ">
        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="fName" className="block relative py-1.5">Name</label>
          <div className="">
            <input id="fName" type="text" {...register("fName", {required: true})}
              required
              autoComplete="given-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-100 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="sName" className="block relative py-1.5" >
            Surname
          </label>
          {errors.sName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.sName?.message}</p>}

          <div className="">
            <input id="sName" type="text" {...register("sName", {required: true})}
              required
              autoComplete="family-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-100 text-sm px-3.5 py-2"
            />
          </div>
        </div>
        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="email" className="block relative py-1.5">
            Email

          </label>

          <div className="">
            <input id="email" type="text" {...register("email", {required: true})}
              required
              autoComplete="email"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-100 text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="phone" className="block relative py-1.5">
            Phone

          </label>

          <div className="">
            <input id="phone" type="text" {...register("phone", { required: true })}
              required
              autoComplete="tel"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-100 text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.phone?.message}</p>}
        </div>
      </div>
    
      <div className="flex justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  "> 
        <Button
          type="button"
          variant="ghost"
          size="none"
          onClick={onPrevious}
          className="px-4 text-gray-300 text-base "
        >
          Back
        </Button>
        <Button 
          type="submit"
          disabled={!isValid}
          rounded="md"
          intent="primary"
          className="ml-auto w-1/2 sm:w-1/3 px-4 py-2.5 text-base"
        >
          {/* <Tick className="h-6 w-6 flex-none" /> */}
          Next
        </Button>
      </div>

    </form>
  );
}
