import { Navigation } from "./Navigation";

interface Props {
  className?: string;
}

export const DesktopNav = (props:Props) => {
  return (
    <Navigation {...props}/>
  );
}