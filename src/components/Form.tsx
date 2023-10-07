import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaWithVehicle } from '../models/Models';
import type { UserWithVehicle } from "../models/Models";
import { Button } from "./Button";
import { cn } from "../utils/utils";
import { Space } from "./Space";

export const Form = ({className}: {className?: string}) => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserWithVehicle>({
    resolver: zodResolver(UserSchemaWithVehicle),
  });

  const classes = cn('', className);

  const onSubmit: SubmitHandler<UserWithVehicle> = (data) => {
    console.log(data.fName);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <div className="form-pages flex text-gray-300 text-sm xs-v:text-xs">
        <div className="basis-1/2 border-gray-600 rounded-t page-label py-2.5 px-6 translate-y-[2px] border border-b-transparent  bg-dark/50 backdrop-blur-md  z-20">You</div>
        <div className="basis-1/2 border border-gray-600 rounded-t page-label py-2.5
          px-6 translate-y-[2px]  bg-dark/50 backdrop-blur-md ">The Car</div>
      </div>

      <div className="flex flex-col px-6 xs-v:py-3 pb-6 xs-v:pb-4 gap-3 border border-gray-600 bg-dark/50 backdrop-blur-md rounded z-10">

        <div className="text-sm xs-v:text-xs font-semibold w-full text-gray-300">
          <label htmlFor="fName ">Name</label>
          <div className="mt-1">
            <input id="fName" type="text" {...register("fName", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-inputDark text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-semibold w-full text-gray-300">
          <label htmlFor="sName">Surname</label>
          <div className="mt-1">
            <input id="sName" type="text" {...register("sName", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-inputDark text-sm px-3.5 py-2"
            />
          </div>
          {errors.sName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.sName?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-semibold w-full text-gray-300">
          <label htmlFor="email">Email</label>
          <div className="mt-1">
            <input id="email" type="text" {...register("email", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-inputDark text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="bg-red-100 border border-red-500 text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="text-sm xs-v:text-xs font-semibold w-full text-gray-300">
          <label htmlFor="phone">Phone Number</label>
          <div className="mt-1">
            <input id="phone" type="text" {...register("phone", { required: true })}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-inputDark text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="bg-red-100 border border-red-500 text-red-500">{errors.phone?.message}</p>}
        </div>
        <div className="flex xs-v:mt-1">
          <Button   
            rounded="md"
            intent="primary"
            className="w-full"
          >
            {/* <Tick className="h-6 w-6 flex-none" /> */}
            Submit
          </Button>
        </div>
      
      </div>
    </form>
  );
}