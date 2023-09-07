import { Tick } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="mt-6 flex justify-start w-full">
      <Button   
        size="sm"
        rounded
        variant="dark"   
        // intent="primary"
      >
        <Tick className="h-6 w-6 flex-none" />
        <span className="ml-2.5">Source your Car</span>
      </Button>

    </div>
  )
}