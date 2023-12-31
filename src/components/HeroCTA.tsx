import { SearchIcon, Plane, CarIcon2 } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="xxs-v:mt-4 mt-6 lg:mt-12 flex flex-col items-start space-y-2.5">
      <Button   
        className="cta-btn--hero invisible opacity-0"
        rounded
        intent="dark"   
        size="md"
      >
        <CarIcon2 className=" h-7 w-7 flex-none" />
        <span className="ml-3">Get Started</span>
      </Button>
      <Button   
        className="cta-btn--hero xxs-v:hidden invisible opacity-0"
        rounded
        variant="ghost"
        size="md"
      >
        <SearchIcon className="h-6 w-6  flex-none" />
        <span className="ml-3 ">Read more</span>
      </Button>
    </div>
  )
}