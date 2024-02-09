import { Review } from "./Review";
import type { ComponentProps } from "react";
import { Button } from "./Button";
import { CarIcon2, Plane } from "../utils/svgComponents";
import { cn } from "../utils/utils";

type ReviewProps = {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
}



export const Reviews = () => {
  const classes = cn("flex flex-col sm:flex-row sm:flex-wrap sm:justify-between space-y-8 sm:space-y-0  sm:gap-y-8 xl:gap-y-20");

  const reviews: ReviewProps[] = [
    {
      reviewId: 1,
      title: "Lorem ipsum dolor",
      body: "I thought it wasn't going to match my hoodie, I was panicking.",
      author: "Karen Page",
      rating: 1
    },
    {
      reviewId: 2,
      title: "Dolor sit amet",
      body: "Voluptatum doloremque dolor sit amet dolor elit. Voluptatum doloremque dolor sit amet consectetur adipisicing elit. Voluptatum doloremque",
      author: "Benjamin Johnson",
      rating: 5
    },
    {
      reviewId: 3,
      title: "Love my new car!",
      body: "I thought it wasn't going to match my hoodie, I was panicking.",
      author: "Reggie",
      rating: 4
    },
  ];

  // const autoplayOptions = {  delay:0,  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement}
  // const carouselOptions = { loop: true, duration: 4000, watchDrag: false }

  const renderedReviews = reviews.map(({reviewId, title, body, author, rating}: ReviewProps) => {
    return (
      <Review
        reviewId={reviewId}
        title={title}
        body={body}
        author={author}
        rating={rating}
      />
    );
  })
  return (
    <div className={classes}>
      {/* <Carousel slides={renderedReviews} axis="y" autoplayOptions={autoplayOptions} options={carouselOptions} /> */}
      {renderedReviews}
      <div className="flex flex-col ml-auto sm:w-[48%] xl:w-[32%] justify-center items-center xl:items-start px-2 xl:pl-6 space-y-8 ">
        {/* <p className="flex w-full text-xl xl:text-xl xl:font-medium text-textGray text-center xl:text-start max-w-xs px-1.5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
        <Button     
          className="w-full mx-auto xl:ml-auto xl:mr-2 sm:w-auto max-w-[300px] px-4 py-2.5 md:py-3 xl:py-4"
          rounded
          intent="primary"   
          size="md"
        >
          <span className="text-base xl:text-xl">Get Started</span>
          <Plane className="ml-3 h-5 w-5 flex-none" />
        </Button>
      </div>
    </div>
  );
};