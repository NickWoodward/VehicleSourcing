import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react"
import { cn } from "../utils/utils";

interface IntroProps extends ComponentProps<"div">, VariantProps<typeof sectionVariants> {
  title: string,
  subtitle: string,
  tagline?: string,
  taglineClasses?: string,
}

interface TagLineProps extends ComponentProps<"div">, VariantProps<typeof taglineVariants> {
  content: string
}

const sectionVariants = cva("flex flex-col w-full items-start", {
  variants: {
    variant: {
      default: "text-gray-700",
      dark: "text-white",
    },
    align: {
      default: "items-start",
      center: "items-center"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

const subtitleVariants = cva("mb-1 font-semibold tracking-tight text-primary", {
  variants: {
    variant: {
      default: "text-sm",
      dark: "text-sm",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const taglineVariants = cva("mt-3", {
  variants: {
    variant: {
      default: "text-gray-600",
      dark: "text-gray-400",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

const TagLine = ({content, className}: TagLineProps) => {
  return (
    <p className={className}>
      {content}
    </p>
  );
}

export const SectionIntro = ({title, subtitle, tagline, variant, align, className, taglineClasses}: IntroProps) => {
  return (
    <div className={cn(className, sectionVariants({variant, align}))}>
      <h3 className={cn(subtitleVariants({variant}))}>{subtitle}</h3>
      <h2 className="text-xl xs:text-2xl font-medium tracking-tight">
        {title}
      </h2>
      {tagline && <TagLine content={tagline} className={cn("", taglineClasses, taglineVariants({variant}))}/>}
    </div>
  );
}