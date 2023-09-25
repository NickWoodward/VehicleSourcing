import { Tick, Plane } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="mt-8 flex flex-col items-start space-y-1">
      <Button   
        
        rounded
        intent="dark"   
        variant="outline"
      >
        <Tick className=" h-6 w-6 md:h-8 md:w-8 flex-none" />
        <span className="ml-2.5 lg:ml-3">Find your Car</span>
      </Button>
      <Button   
        
        rounded
        variant="ghost"
        // intent="primary"
      >
        <Plane className="h-6  w-6 flex-none" />
        <span className="ml-2.5 lg:ml-3.5">Read more</span>
      </Button>
    </div>
  )
}