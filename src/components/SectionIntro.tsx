import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react"
import { cn } from "../utils/utils";

interface IntroProps extends ComponentProps<"div">, VariantProps<typeof sectionVariants> {
  title: string,
  titleClasses,
  subtitle: string,
  subtitleClasses?: string,
  tagline?: string,
  taglineClasses?: string,
}

interface TagLineProps extends ComponentProps<"div">, VariantProps<typeof taglineVariants> {
  content: string
}

const sectionVariants = cva("flex flex-col w-full items-start justify-center", {
  variants: {
    variant: {
      default: "text-gray-700",
      dark: "text-white",
    },

  },
  defaultVariants: {
    variant: "default"
  }
});

const subtitleVariants = cva("animate-text subtitle mb-1 sm:mb3 font-medium text-primary", {
  variants: {
    variant: {
      default: "text-sm xs:text-base sm:text-lg",
      dark: "text-sm xs:text-base sm:text-lg",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const taglineVariants = cva("mt-1", {
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

export const SectionIntro = ({title, subtitle, tagline, variant, className, titleClasses, subtitleClasses, taglineClasses}: IntroProps) => {
  return (
    <div className={cn(sectionVariants({variant}), className)}>
      <h3 className={cn(subtitleVariants({variant}), subtitleClasses)}>{subtitle}</h3>
      <h2 className={cn("title text-xl xs:text-xl sm:text-2xl font-medium tracking-tight", titleClasses)}>
        {title}
      </h2>
      {tagline && <TagLine content={tagline} className={cn("tagline", taglineClasses, taglineVariants({variant}))}/>}
    </div>
  );
}