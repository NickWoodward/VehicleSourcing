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

  const classes = cn("px-6 xl:px-8 pt-6 pb-8 xl:pt-8 xl:pb-12 sm:w-[48%] xl:w-[32%] bg-blue-50 rounded shadow-md",
    className
  );
  return (
    <div key={reviewId} className={classes}>
      <figure
        {...props}
      >
        <blockquote className="text-primaryDark">
          <StarRating rating={rating} />
          <p className="mt-3 xl:mt-2 text-lg xl:text-xl font-semibold leading-5 before:content-['“'] after:content-['”']">
            {title}
          </p>
          <p className="mt-2 xl:mt-3 text-base sm:text-lg xl:text-xl text-textGray font-light leading-6 line-clamp-4">{body}</p>
        </blockquote>
        <figcaption className="mt-2 xl:mt-3 text-base xl:text-lg font-medium text-primaryDark before:content-['–_']">
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
            'h-5 w-5 xl:h-7 xl:w-7',
            rating > index ? 'fill-yellow' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  );
};