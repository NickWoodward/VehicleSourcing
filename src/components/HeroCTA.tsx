import { SearchIcon,  ArrowTopRight, ChevronRight, Plane } from "../utils/svgComponents";
import { Button } from "./Button";
import { useState, type FormEvent } from "react";

export const HeroCTA = () => {
  const [plateOpen, setPlateOpen] = useState<boolean>(false);
  const [numberplate, setNumberplate] = useState<string>('');
  const [platePlaceholder, setPlatePlaceholder] = useState("ENTER REG");

  const toggleNumberPlate = () => {
    setPlateOpen((currPlateOpen) => !currPlateOpen);
  }

  const handleRegSubmit = (e:FormEvent) => {
    e.preventDefault();
    console.log('submit');
  }

  return (
    <div className="xxs-v:mt-4 mt-6 xs:mt-4 lg:mt-8 h-24 flex flex-col   space-y-1.5 xl:space-y-2">
      
      {
        plateOpen? 
        <Button   
          className="font-numberplate cta-btn--hero shadow-lg px-4 w-[160px] xl:w-[180px] 3xl:w-200px h-[45px] xl:h-[50px] 3xl:h-[60px]  py-2.5 md:py-3 xl:py-4 bg-yellow outline outline-1 outline-gray-500 3xl:leading-10"
          rounded="md"
          size="sm"
        >
          <a href="#contact" className="flex justify-center items-center space-x-3 w-full">
            <span className="text-gray-800  text-[1.5rem] 3xl:text-[1.7rem]">START</span>
            {/* <Plane flip={true} className="h-5 w-5 flex-none" /> */}
          </a>
        </Button> 
        : 
        <form             
          onSubmit={(e) => handleRegSubmit(e)}
        >
          <input   
            className="cta-btn--hero placeholder-gray-700 text-center font-numberplate outline outline-1 outline-gray-500 shadow-lg space-x-3 px-6 h-[45px] xl:h-[50px] 3xl:h-[60px] w-[160px] xl:w-[180px] 3xl:w-[200px] py-3 xl:py-4 bg-yellow text-gray-800 rounded text-[1.5rem] 3xl:text-[1.7rem] 3xl:leading-10"
            value={numberplate}
            onChange={(e) => setNumberplate(e.target.value?.toUpperCase())}
            onFocus={() => setPlatePlaceholder("")}
            onBlur={() => setPlatePlaceholder("ENTER REG")}
            placeholder={platePlaceholder}
          />
        </form>
      }
      {/* <input placeholder="ENTER REG" className="font-numberplate w-full bg-yellow text-gray-800  text-[1.5rem]" /> */}


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
            <span className="ml-1 xl:ml-0 text-sm xs:text-md xl:text-lg text-gray-500">Or sell us your car</span>:
            <span className="ml-1 xl:ml-0 text-sm xs:text-md xl:text-lg text-gray-500">Get Started</span>  
        }          
        {/* <ArrowTopRight className="h-3 w-3 text-slate-600 -translate-y-1 flex-none" /> */}
          <ChevronRight className="h-3 w-3 xl:h-4 xl:w-4 text-gray-500 flex-none" />

        </Button>
        {/* <Button   
          className="cta-btn--hero invisible opacity-0 outline outline-1 outline-gray-500 shadow-lg space-x-3 px-9   py-3 bg-yellow text-black"
          rounded="md"
          size="sm"
        >
          <span className="font-numberplate text-gray-800  text-[1.5rem]">ENTER REG</span>
        </Button> */}
      </div>

    </div>
  )
}

