import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  disabled?: boolean | undefined;
}

export const buttonVariants = cva("flex items-center justify-center  text-sm sm:text-lg  outline-2 outline-offset-2", {
  variants: {
    variant: {
      default: "bg-primary text-white",
      outline: `border border-current bg-transparent`,
      ghost: "bg-transparent shadow-none border-none",
    },
    intent: {
      primary: "border-primary bg-primary text-white",
      secondary: "text-slate-500 ",
      dark: "bg-gray-700 text-white hover:bg-darker active:bg-gray-800 active:text-white/80",
      monochrome: "bg-white text-text border border-gray-400",
    },
    size: {
      sm:"pl-3 py-2.5 pr-5 md:pl-3 md:pr-10 md:py-1.5 ",
      md:"pl-3 py-3.5 pr-7 md:pl-4 md:pr-7 md:py-3.5 ",
      none: "p-0"
    },
    aspect: {
      square: "p-4",
      circle: "p-4 rounded-full",
    },
    rounded: {
      true: "rounded-xl",
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
        className={cn(
          buttonVariants({ variant, intent,  size, aspect, rounded, className })
        )}
        {...props}
      />
    );
  }
);