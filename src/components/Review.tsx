import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { StarIcon } from "../utils/svgComponents";

export interface ReviewProps extends ComponentProps<"div"> {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
  className?: string,
}

export const Review = ({className, reviewId, title, body, author,rating, ...props}: ReviewProps) => {

  const classes = cn("rounded w-full bg-white p-6 shadow shadow-dark/20",
    className
  );

  return (
    <figure
      className={classes}
      {...props}
    >
      <blockquote className="text-gray-600">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
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