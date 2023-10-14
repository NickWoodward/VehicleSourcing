import { SearchIcon, Plane } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="mt-6 sm:mt-12 flex flex-col items-start space-y-3">
      <Button   
        className="cta-button animate-text invisible opacity-0"
        rounded
        intent="dark"   
        variant="outline"
      >
        <SearchIcon className="h-6 w-6  flex-none" />
        <span className="ml-3.5">Find your Car</span>
      </Button>
      <Button   
        className="cta-button animate-text invisible opacity-0"
        rounded
        variant="ghost"
        // intent="primary"
      >
        <Plane className="h-6  w-6 flex-none" />
        <span className="ml-2.5 ">Read more</span>
      </Button>
    </div>
  )
}