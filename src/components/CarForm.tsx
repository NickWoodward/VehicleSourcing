import { useContext, type ComponentProps, useEffect } from "react";
import { FormStateContext } from "./FormContainer";
import { useForm, useFormState } from "react-hook-form";
import { produce } from "immer";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../utils/utils";
import { VehicleSchema } from "../models/Models";
import { Button } from "./Button";
import { Plane } from "../utils/svgComponents";

interface Props extends ComponentProps<"div"> {
  onNext: () => void;
  onPrevious: () => void;
  step: number;
};

export const CarForm = ({ onNext, onPrevious, step, className }: Props ) => {
  const { form, setForm } = useContext(FormStateContext);
  const {register, handleSubmit, getValues, formState: { errors, isValid }, control } = useForm({
    // shouldUseNativeValidation: true,
    resolver: zodResolver(VehicleSchema),
    defaultValues: {
      manufacturer: form.steps.car.value.manufacturer,
      model: form.steps.car.value.model,
      year: form.steps.car.value.year,
      mileage: form.steps.car.value.mileage,
    },
    mode: 'all'
  });
  const { isDirty } = useFormState({
    control,
  });
  useEffect(() => {
    setForm(
      produce((form) => {
        form.steps.car.dirty = isDirty
      })
    );
  }, [isDirty, setForm]);

  const onSubmit = (value: {manufacturer:string, model:string, year:string, mileage:string}) => {
    setForm(
      produce((formState) => {
        formState.steps.car = {
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
    <form onSubmit={handleSubmit(onSubmit)} className={classes} >
      <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr]  gap-x-3 gap-y-1 sm:gap-x-6 ">
        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="manufacturer" className="block relative py-1.5">Manufacturer</label>
          <div>
            <input
              id="manufacturer"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              required
              type="text"
              autoComplete="off"
              {...register("manufacturer", { required: true })}
            />
          </div>
          {errors.manufacturer && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.manufacturer?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="model" className="block relative py-1.5">
            Model
          </label>

          <div>
            <input
              id="model"
              required
              type="text"
              autoComplete="off"
              {...register('model', { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.model && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.model?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="year" className="block relative py-1.5">Year</label>

          <div>
            <input
              id="year"
              required
              type="text"
              autoComplete="off"
              {...register('year', { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.year && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.year?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="mileage" className="block relative py-1.5">Mileage</label>

          <div>
            <input
              id="mileage"
              type="text"
              {...register('mileage', { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.mileage && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-red-500">{errors.mileage?.message}</p>}
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
};