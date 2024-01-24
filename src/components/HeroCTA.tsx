import { SearchIcon,  ArrowTopRight, ChevronRight } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="xxs-v:mt-4 mt-6  lg:mt-8 flex flex-col items-start space-y-1.5">
      
      <Button   
        className="cta-btn--hero invisible opacity-0 shadow-lg space-x-3 px-4 py-2.5 bg-primary text-offWhite"
        rounded="md"
        size="sm"
      >
        <span className=" text-offWhite  text-base">Get Started</span>
        <SearchIcon flip={true} className="h-5 w-5 flex-none" />
      </Button>
      {/* <Button   
        className="cta-btn--hero invisible opacity-0 outline outline-1 outline-gray-500 shadow-lg space-x-3 px-9   py-3 bg-yellow text-black"
        rounded="md"
        size="sm"
      >
        <span className="font-numberplate text-gray-800  text-[1.5rem]">ENTER REG</span>
      </Button> */}
      <Button   
        className="cta-btn--hero xxs-v:hidden invisible opacity-0 space-x-2 cursor"
        rounded
        variant="ghost"
        size="sm"
      >
        <span className="ml-1 text-sm text-gray-500">Or sell us your car</span>
        {/* <ArrowTopRight className="h-3 w-3 text-slate-600 -translate-y-1 flex-none" /> */}
        <ChevronRight className="h-3 w-3 text-gray-500 flex-none" />

      </Button>
    </div>
  )
}