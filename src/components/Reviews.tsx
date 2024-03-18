import { Review } from "./Review";
import { Button } from "./Button";
import { Plane } from "../utils/svgComponents";
import { cn } from "../utils/utils";

type ReviewProps = {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
}

interface Props {
  className: string
}

export const Reviews = ({className}: Props) => {
  const classes = cn("flex flex-col sm:flex-row sm:flex-wrap sm:justify-between mx-auto max-w-[450px] sm:max-w-none space-y-8 sm:space-y-0  sm:gap-y-8 xl:gap-y-20", className);

  const reviews: ReviewProps[] = [
    {
      reviewId: 1,
      title: "Jeff was great",
      body: "Jeff made finding my new car a pleasure. He really knows his stuff and stopped me making some expensive descisions. Recommended",
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
    let reviewClasses; 
    
    switch (reviewId) {
      case 1: reviewClasses = 'rounded-bl-2xl'; break;
      case 2: reviewClasses = 'rounded-tr-2xl'; break;
      case 3: reviewClasses = 'rounded-br-2xl'; break;
      case 4: reviewClasses = 'rounded-tl-2xl';  break;
      default: reviewClasses = 'rounded-2xl'
    }
    return (
      <Review
        key={reviewId}
        reviewId={reviewId}
        title={title}
        body={body}
        author={author}
        rating={rating}
        reviewClasses={reviewClasses}
      />
    );
  })
  return (
    <div className={classes}>
      {/* <Carousel slides={renderedReviews} axis="y" autoplayOptions={autoplayOptions} options={carouselOptions} /> */}
      {renderedReviews}
      
    </div>
  );
};