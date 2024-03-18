import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react"
import { cn } from "../utils/utils";
import { useGSAP } from "@gsap/react";

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

const sectionVariants = cva("section-intro flex flex-col w-full items-start justify-center max-w-sm lg:max-w-lg xl:max-w-md", {
  variants: {
    variant: {
      default: "text-gray-700 font-semibold",
      dark: "text-offWhite font-medium",
    },

  },
  defaultVariants: {
    variant: "default"
  }
});

const subtitleVariants = cva("subtitle mb-0.5 sm:mb3 font-semibold text-primary", {
  variants: {
    variant: {
      default: "text-base xs:text-base sm:text-lg xl:text-2xl",
      dark: "text-base xs:text-base sm:text-lg xl:text-2xl",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
const titleVariants = cva("title   tracking-tight", {
  variants: {
    variant: {
      default:"text-2xl md:text-2.5xl   xl:text-3xl font-semibold text-primaryDark",
      dark: "text-2xl md:text-2.5xl   xl:text-3xl font-medium"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
const taglineVariants = cva("mt-1.5 xl:mt-2", {
  variants: {
    variant: {
      default: "text-lg md:text-xl xl:text-2xl text-textGray font-normal leading-6 xs:leading-7",
      dark: "text-lg md:text-xl xl:text-2xl text-gray-300 font-normal leading-6 xs:leading-7",
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export const TagLine = ({content, className}: TagLineProps) => {
  return (
    <p className={className}>
      {content}
    </p>
  );
}

export const SectionIntro = ({title, subtitle, tagline, variant, className, titleClasses, subtitleClasses, taglineClasses}: IntroProps) => {
  useGSAP(() => {
    gsap.to('.title', { autoAlpha:1, y:0, ease: "ease: back.in(2)", stagger: .12, duration: .8 });
  });

  return (
    <div className={cn(sectionVariants({variant}), className)}>
      <h3 className={cn(subtitleVariants({variant}), subtitleClasses)}>{subtitle}</h3>
      <h2 className={cn(titleVariants({variant}), titleClasses)}>
        {title}
      </h2>
      {tagline && <TagLine content={tagline} className={cn("tagline font-light ", taglineClasses, taglineVariants({variant}))}/>}
    </div>
  );
}