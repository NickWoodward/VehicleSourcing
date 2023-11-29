import { Review } from "./Review";
import { EmblaCarousel as Carousel } from "./Carousel";
import type { ComponentProps } from "react";
import { Button } from "./Button";
import { CarIcon2 } from "../utils/svgComponents";
import { cn } from "../utils/utils";

type Props = {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
}

export const Reviews = ({className}: ComponentProps<"div">) => {
  const classes = cn("flex flex-col sm:flex-row sm:flex-wrap sm:justify-between space-y-10 sm:space-y-0  sm:gap-y-8 ", className);

  const reviews: Props[] = [
    {
      reviewId: 1,
      title: "Bitch Move Innit",
      body: "He didn't sell any cars anyway",
      author: "Anonymous",
      rating: 1
    },
    {
      reviewId: 2,
      title: "Petrol's Up!",
      body: "I got a white van",
      author: "Benjamin",
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

  const autoplayOptions = {  delay:0,  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement}
  const carouselOptions = { loop: true, duration: 4000, watchDrag: false }

  const renderedReviews = reviews.map(({reviewId, title, body, author, rating}: Props) => {
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
      <div className="flex flex-col md:w-[48%] xl:w-[30%] justify-center items-start space-y-8 ">
        <p className="flex">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <Button     
          className="w-full"
          rounded
          intent="primary"   
          size="md"
        >
          <CarIcon2 className=" h-7 w-7 flex-none" />
          <span className="ml-3">Get Started</span>
        </Button>
      </div>
    </div>
  );
};