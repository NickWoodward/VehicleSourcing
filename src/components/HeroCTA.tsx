import { produce } from "immer";
import { ChevronRight } from "../utils/svgComponents";
import { Button } from "./Button";
import { useState, type FormEvent, useContext, useEffect } from "react";
import { FormStateContext } from "./FormContainer";
import { Modal } from "./Modal";
import { RegistrationSummary } from "./RegistrationSummary";

import {$registration} from '../store/store';
import { cn } from "../utils/utils";

interface Props {
  className?: string
}

export const HeroCTA = ({className}: Props) => {
  const [plateOpen, setPlateOpen] = useState<boolean>(false);
  const [numberplate, setNumberplate] = useState<string>('');
  const [platePlaceholder, setPlatePlaceholder] = useState("ENTER REG");

  const scrollToContact = () => {
    // querySelector used because no shared react component
    const contact = document.querySelector('.contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  }

  const toggleNumberPlate = () => {
    setPlateOpen((currPlateOpen) => !currPlateOpen);
  }

  const handleRegSubmit = async (e:FormEvent) => {
    e.preventDefault();
    $registration.set(numberplate);
    scrollToContact();
  }

  const changeHandler = (e:FormEvent) => {
    const target = e.currentTarget as HTMLInputElement;

    if(target.value.length === 4) {
      setNumberplate(' ' + target.value?.toUpperCase())

    }
    setNumberplate(target.value?.toUpperCase())
  }

  const classes = cn("mt-4  xs:mt-4 lg:mt-8 h-24 flex flex-col   space-y-2.5 xl:space-y-2", className);

  return (
    <div className={classes}>
      {
        plateOpen? 
        <Button   
          className="font-numberplate cta-btn--hero shadow-lg px-4 w-[160px] xl:w-[180px] 3xl :w-200px h-[45px] xl:h-[50px] 3xl:h-[60px]  py-2.5 md:py-3 xl:py-4 bg-yellow outline outline-1 outline-gray-500 3xl:leading-10"
          rounded="md"
          size="sm"
        >
          <a href="#contact" className="flex justify-center items-center space-x-3 w-full">
            <span className="text-gray-800  text-[1.5rem] 3xl:text-[1.7rem]">START</span>
          </a>
        </Button> 
        : 
        <form             
          onSubmit={(e) => handleRegSubmit(e)}
        >
          <input   
            className="cta-btn--hero placeholder-gray-700 text-center font-numberplate outline outline-1 outline-gray-500 shadow-lg space-x-3 px-6 h-[45px] xl:h-[50px] 3xl:h-[60px] w-[160px] xl:w-[180px] 3xl:w-[200px] py-3 xl:py-4 bg-yellow text-gray-800 rounded text-[1.5rem] 3xl:text-[1.7rem] 3xl:leading-10"
            name="reg"
            value={numberplate}
            onChange={changeHandler}
            onFocus={() => setPlatePlaceholder("")}
            onBlur={() => setPlatePlaceholder("ENTER REG")}
            placeholder={platePlaceholder}
            autoComplete="off"
          />
        </form>
      }

      <div className="sell-cta">
        <Button   
          className="cta-btn--hero invisible opacity-0 xxs-v:py-0 py-2  flex items-center space-x-2 xl:space-x-2.5 cursor"
          rounded
          variant="ghost"
          size="sm"
          onClick={toggleNumberPlate}
        >
        {
          plateOpen? 
            <span className="ml-1 xl:ml-0 text-base xs:text-md xl:text-lg text-textGray font-medium">Or sell us your car</span>:
            <span className="ml-1 xl:ml-0 text-base xs:text-md xl:text-lg text-textGray font-medium">Get Started</span>  
        }          
        
          <ChevronRight className="h-3 w-3 xl:h-4 xl:w-4 text-gray-500 flex-none" />

        </Button>
      </div>
    </div>
  )
}

