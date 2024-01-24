import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonSchema, PersonSchemaWithVehicle } from '../models/Models';
import type { UserWithVehicle } from "../models/Models";
import { Button } from "./Button";
import { cn } from "../utils/utils";
import { ChevronLeft } from "../utils/svgComponents";
import { FormEvent, useState } from "react";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const Form = ({className}: {className?: string}) => {
  const NUM_FORM_STEPS = 2;

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm<UserWithVehicle>({
    resolver: zodResolver(PersonSchema),
    mode: 'all'
  });

  const [stepIndex, setStepIndex] = useState(0);
  const [responseMessage, setResponseMessage] = useState("");

  const onSubmit: SubmitHandler<UserWithVehicle> = async (data) => {
    await sleep(2000)
    console.log("data")

    const response = await fetch("/api/enquiry", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (result.message) {
      setResponseMessage(result.message);
    }
  }

  const nextFormStep = () => {
    console.log("next:", "current index:", stepIndex);
    if(stepIndex +1 >= NUM_FORM_STEPS) return;
    setStepIndex(currIndex => currIndex + 1);
  };
  const previousFormStep = () => {
    console.log("previous:", "current index:", stepIndex);
    if(stepIndex < 1) return;
    setStepIndex(currIndex => currIndex - 1);
  };

  const classes = cn('bg-slate-100 space-y-10 px-6 xs:px-8 sm:px-10 pb-8 xs:pb-10 pt-4 xs:pt-6 shadow-md rounded', className);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>


      <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr]  gap-x-3 gap-y-1 sm:gap-x-6 bg-slate-100">
        <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
          <label htmlFor="fName" className="block relative py-1.5">Name</label>
          <div className="">
            <input id="fName" type="text" {...register("fName", {required: true})}
              required
              autoComplete="given-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
            />
            
          </div>
          {errors.fName && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.fName?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="sName" className="block relative py-1.5" >
            Surname
          </label>
          {errors.sName && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.sName?.message}</p>}

          <div className="">
            <input id="sName" type="text" {...register("sName", {required: true})}
              required
              autoComplete="family-name"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
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
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.email && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.email?.message}</p>}
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
          <label htmlFor="phone" className="block relative py-1.5">
            Phone

          </label>

          <div className="">
            <input id="phone" type="text" {...register("phone", { required: true })}
              required
              autoComplete="tel"
              className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
              />
          </div>
          {errors.phone && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.phone?.message}</p>}
        </div>
      </div>
    
      <div className="flex justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  "> 
        <Button 
          type="submit"
          disabled={!isValid}
          rounded="md"
          intent="primary"
          className="w-1/2 sm:w-1/3 px-8 py-3 text-base"
        >
          {/* <Tick className="h-6 w-6 flex-none" /> */}
          Submit
        </Button>
      </div>

      {responseMessage && <p>{responseMessage}</p>}
      <pre>{JSON.stringify(watch(), null, 2)} {JSON.stringify(isValid, null, 2)}</pre>
    </form>
  );
}











// <form onSubmit={handleSubmit(onSubmit)} className={classes}>
// <div className="subheader relative sm:col-span-2 sm:col-start-1  flex items-center gap-x-5 ">
//   <button 
//     data-current={stepIndex===0} 
//     disabled={stepIndex===0}
//     onClick={() => setStepIndex(0)}
//     className="border-b-[3px] data-[current=true]:border-primary border-slate-300 data-[current=true]:text-slate-600 text-slate-300 flex  grow w-1/2  py-1.5 text-base font-semibold leading-7  "
//   >
//     You
//   </button>
//   <button 
//     disabled={stepIndex===1}
//     data-current={stepIndex===1} 
//     onClick={() => setStepIndex(1)}
//     className="border-b-[3px] data-[current=true]:border-primary border-slate-300 data-[current=true]:text-slate-600 text-slate-300 flex grow w-1/2 sm:col-span-2 sm:col-start-1 py-1.5 px-2 text-base font-semibold leading-7  "
//   >
//     The Car
//   </button>
// </div>

// {stepIndex === 0 ? 
// <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr]  gap-3 sm:gap-x-6 bg-slate-100">
//   <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
//     <label htmlFor="fName">Name</label>
//     <div className="">
//       <input id="fName" type="text" {...register("fName", {required: true})}
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//       />
      
//     </div>
//     {errors.fName && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.fName?.message}</p>}
//   </div>
//   <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
//     <label htmlFor="sName" className="flex w-full  relative" >
//       Surname
//       {errors.sName && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.sName?.message}</p>}

//     </label>

//     <div className="">
//       <input id="sName" type="text" {...register("sName", {required: true})}
  
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//       />
//     </div>
//   </div>
//   <div className="relative sm:col-span-1 sm:col-start-1 text-base font-medium w-full text-gray-500">
//     <label htmlFor="email">
//       Email

//     </label>

//     <div className="">
//       <input id="email" type="text" {...register("email", {required: true})}
  
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//         />
//     </div>
//     {errors.email && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.email?.message}</p>}
//   </div>
//   <div className="relative sm:col-span-1 sm:col-start-2 text-base font-medium w-full text-gray-500">
//     <label htmlFor="phone">
//       Phone

//     </label>

//     <div className="">
//       <input id="phone" type="text" {...register("phone", { required: true })}
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//         />
//     </div>
//     {errors.phone && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.phone?.message}</p>}
//   </div>


// </div>
// :
// <div className="grid sm:grid-cols-2 sm:grid-rows-[min-content-fit_1fr]  gap-3 sm:gap-x-6 bg-slate-100"> 
  
//   <div className="relative text-base font-medium w-full text-gray-500">
//     <label htmlFor="manufacturer ">Manufacturer</label>

//     <div className="">
//       <input id="manufacturer" type="text" {...register("manufacturer", {required: true})}
  
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//       />
      
//     </div>
//     {errors.manufacturer && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.manufacturer?.message}</p>}
//   </div>
//   <div className="relative text-base font-medium w-full text-gray-500">
//     <label htmlFor="model">
//       Model
//     </label>

//     <div className="">
//       <input id="model" type="text" {...register("model", {required: true})}
  
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//       />
//     </div>
//     {errors.model && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.model?.message}</p>}
//   </div>
//   <div className="relative text-base font-medium w-full text-gray-500">
//     <label htmlFor="year">Year</label>
//     <div className="">
//       <input id="year" type="text" {...register("year", {required: true})}
  
//         className="w-full rounded ring-slate-200 ring-inset ring-1 bg-slate-50 text-sm px-3.5 py-2"
//         />
//     </div>
//     {errors.year && <p className="absolute  bottom-0 right-0 pr-1 h-full text-red-500">{errors.year?.message}</p>}
//   </div>

// </div>}

// <div className="flex justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  ">
  
//   <Button 
//     disabled={stepIndex === 0}
//     type="button"
//     onClick={previousFormStep}  
//     rounded="md"
//     variant="ghost"
//     className="gap-x-1.5 xs:gap-x-2.5 text-base text-gray-500 disabled:text-slate-300 "
//   >
//     <ChevronLeft className=" h-4 w-4 flex-none" />
//     <div className="p-1">Back</div>
//   </Button>
  
//   {
//   // Not the last step
//   stepIndex !== NUM_FORM_STEPS -1 ? 
//     <Button   
//       type="submit"
//       // disabled={!isValid}
//       onClick={nextFormStep}
//       rounded="md"
//       intent="secondary"
//       className="w-1/2 sm:w-1/3 px-8 py-3 text-base disabled:bg-gray-400"
//       size="md"
//     >
//       {/* <Tick className="h-6 w-6 flex-none" /> */}
//       Next
//     </Button>
//     :
//     <Button 
//       type="submit"
//       disabled={!isValid}
//       rounded="md"
//       intent="primary"
//       className="w-1/2 sm:w-1/3 px-8 py-3 text-base"
//     >
//       {/* <Tick className="h-6 w-6 flex-none" /> */}
//       Submit
//     </Button>
//   }

// </div>
// {responseMessage && <p>{responseMessage}</p>}
// <pre>{JSON.stringify(watch(), null, 2)} {JSON.stringify(isValid, null, 2)}</pre>
// </form>