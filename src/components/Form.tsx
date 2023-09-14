import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchemaWithVehicle } from '../models/Models';
import type { UserWithVehicle } from "../models/Models";
import { Button } from "./Button";

export const Form = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<UserWithVehicle>({
    resolver: zodResolver(UserSchemaWithVehicle),
  });

  const onSubmit: SubmitHandler<UserWithVehicle> = (data) => {
    console.log(data.fName);
    console.log(data);
  }

  console.log(isValid)

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 mt-[5%] mx-auto">
        <div className="form-pages flex text-gray-300">
          <div className="page-label py-2 px-4">You</div>
          <div className="page-label py-2 px-4">The Car</div>
          <div className="page-label py-2 px-4">Any PX?</div>


        </div>
        <div className="text-sm font-semibold w-full text-gray-300">
          <label htmlFor="fName">Name</label>
          <div className="mt-2.5">
            <input id="fName" type="text" {...register("fName", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-darker text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="text-sm font-semibold w-full text-gray-300">
          <label htmlFor="sName">Surname</label>
          <div className="mt-2.5">
            <input id="sName" type="text" {...register("sName", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-darker text-sm px-3.5 py-2"
            />
          </div>
          {errors.sName && <p className="bg-red-100 border border-red-500 text-red-500">{errors.sName?.message}</p>}
        </div>
        <div className="text-sm font-semibold w-full text-gray-300">
          <label htmlFor="email">Email</label>
          <div className="mt-2.5">
            <input id="email" type="text" {...register("email", {required: true})}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-darker text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="bg-red-100 border border-red-500 text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="text-sm font-semibold w-full text-gray-300">
          <label htmlFor="phone">Phone Number</label>
          <div className="mt-2.5">
            <input id="phone" type="text" {...register("phone", { required: true })}
              className="w-full rounded ring-gray-600 ring-inset ring-1 bg-darker text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="bg-red-100 border border-red-500 text-red-500">{errors.phone?.message}</p>}
        </div>

        <div className="flex">
          <Button   
            size="sm"
            rounded
            intent="primary"
            className=""
          >
            {/* <Tick className="h-6 w-6 flex-none" /> */}
            Submit
          </Button>
        </div>
      
      </form>

      <Button className="" size="sm" rounded variant="outline"  onClick={() => trigger()}>
        Display Data Requirements
      </Button>
    </div>
  );
}