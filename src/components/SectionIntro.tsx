import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react"
import { cn } from "../utils/utils";

interface IntroProps extends ComponentProps<"div">, VariantProps<typeof sectionVariants> {
  title: string,
  titleClasses?: string,
  subtitle: string,
  subtitleClasses?: string,
  tagline?: string,
  taglineClasses?: string,
}

interface TagLineProps extends ComponentProps<"div">, VariantProps<typeof taglineVariants> {
  content: string
}

const sectionVariants = cva("section-intro flex flex-col w-full items-start justify-center max-w-sm lg:max-w-lg", {
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

const subtitleVariants = cva("subtitle mb-1 sm:mb3 font-medium text-primary", {
  variants: {
    variant: {
      default: "text-base xs:text-base sm:text-lg",
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
      <h2 className={cn("title text-xl xs:text-xl sm:text-2xl font-semibold text-gray-700 tracking-tight", titleClasses)}>
        {title}
      </h2>
      {tagline && <TagLine content={tagline} className={cn("tagline text-lg xs:text-lg sm:text-xl lg:text-xl xl:text-2xl text-gray-500", taglineClasses, taglineVariants({variant}))}/>}
    </div>
  );
}