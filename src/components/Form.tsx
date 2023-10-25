import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaWithVehicle } from '../models/Models';
import type { UserWithVehicle } from "../models/Models";
import { Button } from "./Button";
import { cn } from "../utils/utils";
import { Tick } from "../utils/svgComponents";

export const Form = ({className}: {className?: string}) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserWithVehicle>({
    resolver: zodResolver(UserSchemaWithVehicle),
  });

  const classes = cn('rounded-md pt-6 space-y-6', className);

  const onSubmit: SubmitHandler<UserWithVehicle> = (data) => {
    console.log(data.fName);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      {/* <div className="form-pages flex text-slate-700 text-sm xs-v:text-xs">
        <div className="basis-1/2 rounded-t page-label py-2.5 px-6 translate-y-[2px]    z-20">You</div>
        <div className="basis-1/2 rounded-t page-label py-2.5
          px-6 translate-y-[2px]   ">The Car</div>
      </div> */}

      <div className="flex flex-col px-6 xs-v:pb-3 pb-8 pt-6 gap-3 bg-slate-100 shadow-md rounded z-10">

        <div className="subheader flex items-center gap-x-5 mb-3">
          {/* <Button   
            rounded="md"
            variant="ghost"
            aspect="circle"
            className="p-1 bg-slate-600 text-white"
          >
            <Tick className="h-6 w-6 flex-none" />
            
          </Button>   */}
          <h2 className="grow border-b border-primary py-1 text-base font-semibold leading-7 text-slate-700">About You</h2>
        </div>

        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="fName ">Name</label>
          <div className="mt-2">
            <input id="fName" type="text" {...register("fName", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="sName">Surname</label>
          <div className="mt-2">
            <input id="sName" type="text" {...register("sName", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.sName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.sName?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="email">Email</label>
          <div className="mt-2">
            <input id="email" type="text" {...register("email", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="bg-red-100 border border-red-500 text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="phone">Phone Number</label>
          <div className="mt-2">
            <input id="phone" type="text" {...register("phone", { required: true })}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="bg-red-100 border border-red-500 text-red-500">{errors.phone?.message}</p>}
        </div>

        <div className="subheader flex items-center gap-x-5 my-3">
          {/* <Button   
            rounded="md"
            variant="ghost"
            aspect="circle"
            className="p-1 bg-slate-600 text-white"
          >
            <Tick className="h-6 w-6 flex-none" />
            
          </Button>   */}
          <h2 className="grow border-b border-primary py-1 px-2 text-base font-semibold leading-7 text-slate-700">About Your Car</h2>
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-gray-700">
          <label htmlFor="manufacturer ">Manufacturer</label>
          <div className="mt-2">
            <input id="manufacturer" type="text" {...register("manufacturer", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.manufacturer && <p className="bg-red-100 border border-red-500 text-red-500">{errors.manufacturer?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="model">Model</label>
          <div className="mt-2">
            <input id="model" type="text" {...register("model", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
          </div>
          {errors.model && <p className="bg-red-100 border border-red-500 text-red-500">{errors.model?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-medium w-full text-slate-700">
          <label htmlFor="year">Year</label>
          <div className="mt-2">
            <input id="year" type="text" {...register("year", {required: true})}
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.year && <p className="bg-red-100 border border-red-500 text-red-500">{errors.year?.message}</p>}
        </div>
    


      </div>
      <div className="flex mt-2 shadow-md">
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
    </form>
  );
}