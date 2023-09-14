import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  disabled?: boolean | undefined;
}

export const buttonVariants = cva("flex items-center text-sm font-semibold outline-2 outline-offset-2 border", {
  variants: {
    variant: {
      default: "border-primary bg-primary text-white",
      outline: `shadow-sm bg-transparent`,
    },
    intent: {
      primary: "border-primary bg-primary text-white",
      secondary: "bg-neutralDark text-white",
      dark: "bg-gray-700 text-white hover:bg-gray-500 active:bg-gray-800 active:text-white/80",
      monochrome: "bg-white text-text border border-gray-400",
    },
    size: {
      sm: "py-2 px-3",
      md: "px-8 py-2.5",
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
      intent: "primary",
      variant: "outline",
      className: "bg-transparent text-primary",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
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
          buttonVariants({ variant, intent, size, rounded, className })
        )}
        {...props}
      />
    );
  }
);


// import Link from 'next/link'
// import clsx from 'clsx'

// const baseStyles = {
//   solid:
//     'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
//   outline:
//     'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
// }

// const variantStyles = {
//   solid: {
//     cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
//     white:
//       'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
//     gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
//   },
//   outline: {
//     gray: 'border-gray-300 text-slate-600 hover:border-gray-400 active:bg-gray-100 active:text-slate-600/80',
//   },
// }

// type VariantKey = keyof typeof variantStyles
// type ColorKey<Variant extends VariantKey> =
//   keyof (typeof variantStyles)[Variant]

// type ButtonProps<
//   Variant extends VariantKey,
//   Color extends ColorKey<Variant>,
// > = {
//   variant?: Variant
//   color?: Color
// } & (
//   | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
//   | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
//       href?: undefined
//     })
// )

// export function Button<
//   Color extends ColorKey<Variant>,
//   Variant extends VariantKey = 'solid',
// >({ variant, color, className, ...props }: ButtonProps<Variant, Color>) {
//   variant = variant ?? ('solid' as Variant)
//   color = color ?? ('gray' as Color)

//   className = clsx(
//     baseStyles[variant],
//     variantStyles[variant][color],
//     className,
//   )

//   return typeof props.href === 'undefined' ? (
//     <button className={className} {...props} />
//   ) : (
//     <Link className={className} {...props} />
//   )
// }