import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  disabled?: boolean | undefined;
}

export const buttonVariants = cva("flex items-center justify-center  text-base sm:text-lg  outline-2 outline-offset-2", {
  variants: {
    variant: {
      default: "bg-primary text-white",
      outline: `shadow-sm bg-transparent`,
      ghost: "bg-transparent shadow-none border-none",
    },
    intent: {
      primary: "border-primary bg-primary text-white",
      secondary: "bg-neutralDark text-white",
      dark: "bg-gray-700 text-white hover:bg-darker active:bg-gray-800 active:text-white/80",
      monochrome: "bg-white text-text border border-gray-400",
    },
    size: {
      default:"pl-3 md:pl-4 pr-6 md:pr-7 py-3.5 md:py-3.5 ",
      square: "p-4",
      none: "p-0"
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
    size:"default"
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonComponent(
    { className, variant, intent, size, rounded, ...props },
    ref
  ) {

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, intent,  size, rounded, className })
        )}
        {...props}
      />
    );
  }
);