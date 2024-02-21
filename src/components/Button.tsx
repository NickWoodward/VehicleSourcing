import { type ButtonHTMLAttributes, type ReactNode, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  disabled?: boolean | undefined;
}

export const buttonVariants = cva("flex items-center justify-center  text-sm  outline-2 outline-offset-2", {
  variants: {
    variant: {
      default: "bg-primary text-white",
      outline: `border border-current bg-transparent`,
      ghost: "bg-transparent shadow-none border-none",
    },
    intent: {
      primary: "border-primary bg-primary text-white",
      secondary: "bg-dark text-white",
      dark: "bg-gray-700 text-white hover:bg-darker active:bg-gray-800 active:text-white/80",
      monochrome: "bg-white text-text border border-gray-400",
    },
    size: {
      sm:"pl-1.5 py-2 pr-1.5",
      md:"pl-3 py-3 pr-3 md:pl-4",
      none: "p-0"
    },
    aspect: {
      square: "p-4",
      circle: "p-4 rounded-full",
    },
    rounded: {
      true: "rounded-lg",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    readOnly: {
      true: "opacity-80 cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      intent: ["primary"],
      variant: "outline",
      className: "bg-transparent text-primary",
    },
  ],
  defaultVariants: {
    variant: "default",
    size:"none",
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonComponent(
    { className, variant, intent, size, aspect, rounded, ...props },
    ref
  ) {

    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          buttonVariants({ variant, intent,  size, aspect, rounded }),
          className          
        )}
      />
    );
  }
);