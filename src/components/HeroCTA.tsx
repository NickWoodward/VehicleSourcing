import { SearchIcon, Plane } from "../utils/svgComponents";
import { Button } from "./Button";

export const HeroCTA = () => {
  return (
    <div className="mt-6 lg:mt-12 flex flex-col items-start space-y-2.5">
      <Button   
        className="cta-button invisible opacity-0"
        rounded
        intent="dark"   
        size="md"
      >
        <Plane className="h-6  w-6 flex-none" />
        <span className="ml-3">Get Started</span>
      </Button>
      <Button   
        className="cta-button invisible opacity-0"
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