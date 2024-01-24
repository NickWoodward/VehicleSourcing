import type { ComponentProps } from "react";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../utils/utils";
import { StarIcon } from "../utils/svgComponents";

export interface ReviewProps extends ComponentProps<"div">, VariantProps<typeof reviewVariants> {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
  className?: string,
}

export const reviewVariants = cva("", {
  variants: {
    variant: {
      default: "bg-gray-50"
    },
    size: {
      sm: "p-6",
    },
    rounded: {
      true: "rounded",
    },
    defaults: {
      variant: "default",
      size: "sm",
      rounded: true,
    }
  }
});

export const Review = ({className, reviewId, title, body, author,rating, ...props}: ReviewProps) => {

  const classes = cn("px-6 pt-6 pb-8 sm:w-[48%] xl:w-[32%] bg-slate-50 rounded shadow-md",
    className
  );
  return (
    <div key={reviewId} className={classes}>
      <figure
        {...props}
      >
        <blockquote className="text-gray-600">
          <StarRating rating={rating} />
          <p className="mt-3 text-lg font-semibold leading-5 before:content-['“'] after:content-['”']">
            {title}
          </p>
          <p className="mt-2 text-base sm:text-lg text-textGray font-light leading-7 line-clamp-4">{body}</p>
        </blockquote>
        <figcaption className="mt-2 text-base font-medium text-gray-600 before:content-['–_']">
          {author}
        </figcaption>
      </figure>
    </div>
  );
};


function StarRating({ rating }: { rating: ReviewProps['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={cn(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  );
};