import { useContext, type ComponentProps, useEffect } from "react";
import { FormStateContext } from "./FormContainer";
import { useForm, useFormState } from "react-hook-form";
import { produce } from "immer";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  onNext: () => void;
  onPrevious?: () => void;
};

export const CarForm = ({ onNext, onPrevious, className }: Props ) => {
  const { form, setForm } = useContext(FormStateContext);
  const {register, handleSubmit, getValues, formState: { errors, isValid }, control } = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      manufacturer: form.steps.car.value.manufacturer,
      model: form.steps.car.value.model,
      year: form.steps.car.value.year,
      mileage: form.steps.car.value.mileage,
    }
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

  const onBack = (value: {manufacturer:string, model:string, year:string, mileage:string}) => {
    setForm(
      produce((formState) => {
        formState.steps.car = {
          value,
          valid: true,
          dirty: false,
        }
      })
    );    if(onPrevious) onPrevious();
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
              {...register('manufacturer', { required: true })}
            />
          </div>

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
  
        </div>
        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="mileage" className="block relative py-1.5">Mileage</label>

          <div>
            <input
              id="mileage"
              type="text"
              {...register('mileage', { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>

        </div>
      </div>

      <div className="flex justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  ">
        
        <button
          type="button"
          onClick={(e) => onBack(e)}
          className="w-1/2 sm:w-1/3 px-8 py-3 text-base"
        >
          Back
        </button>
        <button
          type="submit"

          className="w-1/2 sm:w-1/3 px-8 py-3 text-base"
        >
          Next
        </button>
      </div>
    </form>
  );
};