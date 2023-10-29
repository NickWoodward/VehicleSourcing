import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaWithVehicle } from '../models/Models';
import type { UserWithVehicle } from "../models/Models";
import { Button } from "./Button";
import { cn } from "../utils/utils";
import { Tick } from "../utils/svgComponents";
import { useState } from "react";

export const Form = ({className}: {className?: string}) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserWithVehicle>({
    resolver: zodResolver(UserSchemaWithVehicle),
  });

  const [pageIndex, setPageIndex] = useState(1);

  const classes = cn('rounded-2xl space-y-6', className);

  const onSubmit: SubmitHandler<UserWithVehicle> = (data) => {
    console.log(data.fName);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      {pageIndex === 1 ? 
      <div className="grid px-7 pb-10 pt-6 gap-3 bg-slate-100 shadow-md rounded-2xl z-10">
        <div className="subheader relative sm:col-span-2 sm:col-start-1  flex items-center gap-x-5 mb-3">

          <h2 className="grow w-1/2 border-b-[3px] border-primary py-1.5 text-base font-semibold leading-7 text-slate-600">You</h2>
          <h2 className="grow w-1/2 sm:col-span-2 sm:col-start-1 border-b-[3px] border-primary py-1.5 px-2 text-base font-semibold leading-7 text-slate-600">The Car</h2>

        </div>

        <div className="sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="fName ">Name</label>
          <div className="mt-1.5">
            <input id="fName" type="text" {...register("fName", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="sName">Surname</label>
          <div className="mt-1.5">
            <input id="sName" type="text" {...register("sName", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.sName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.sName?.message}</p>}
        </div>
        <div className="sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="email">Email</label>
          <div className="mt-1.5">
            <input id="email" type="text" {...register("email", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="bg-red-100 border border-red-500 text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="phone">Phone Number</label>
          <div className="mt-1.5">
            <input id="phone" type="text" {...register("phone", { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="bg-red-100 border border-red-500 text-red-500">{errors.phone?.message}</p>}
        </div>

        <div className="sm:col-span-1 sm:col-start-1 flex items-center mt-2 shadow-md">
          <Button   
            rounded="md"
            intent="primary"
            className="w-full"
            size="md"
          >
            {/* <Tick className="h-6 w-6 flex-none" /> */}
            Next
          </Button>
        </div>
      </div>
      :
      <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr] px-7 pb-10 pt-3 gap-3 sm:gap-x-6 bg-slate-100 shadow-md rounded-2xl z-10"> 
        <div className="subheader sm:col-start-1 sm:col-span-2 flex items-center gap-x-5 my-3">
          {/* <Button   
            rounded="md"
            variant="ghost"
            aspect="circle"
            className="p-1 bg-slate-600 text-white"
          >
            <Tick className="h-6 w-6 flex-none" />
            
          </Button>   */}
        </div>
        <div className="sm:col-span-1 sm:col-start-1  text-base font-medium w-full text-gray-500">
          <label htmlFor="manufacturer ">Manufacturer</label>
          <div className="mt-1.5">
            <input id="manufacturer" type="text" {...register("manufacturer", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.manufacturer && <p className="bg-red-100 border border-red-500 text-red-500">{errors.manufacturer?.message}</p>}
        </div>
        <div className="text-base font-medium w-full text-gray-500">
          <label htmlFor="model">Model</label>
          <div className="mt-1.5">
            <input id="model" type="text" {...register("model", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.model && <p className="bg-red-100 border border-red-500 text-red-500">{errors.model?.message}</p>}
        </div>
        <div className="text-base font-medium w-full text-gray-500">
          <label htmlFor="year">Year</label>
          <div className="mt-1.5">
            <input id="year" type="text" {...register("year", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.year && <p className="bg-red-100 border border-red-500 text-red-500">{errors.year?.message}</p>}
        </div>
    
        <div className="sm:col-span-1 sm:col-start-1 flex items-center sm:col-span-2 sm:col-start-1 sm:row-start-4 flex mt-2 shadow-md">
          <Button   
            rounded="md"
            intent="primary"
            className="w-full"
            size="md"
          >
            {/* <Tick className="h-6 w-6 flex-none" /> */}
            Submit
          </Button>
        </div>

      </div>
}
    </form>
  );
}