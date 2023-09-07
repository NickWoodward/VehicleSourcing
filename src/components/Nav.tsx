import type { ComponentProps } from "react";

interface Props extends ComponentProps<"div">{
  // children: React.ReactNode;
}

export default function Nav(props: Props) {
  return (
    <nav {...props}>
      <div className="text-xl h-headerHeight">Navigation</div>
    </nav>
  );
}