import { Review } from "./Review";
import { EmblaCarousel as Carousel } from "./Carousel";

type Props = {
  reviewId: number,
  title: string,
  body: string,
  author: string,
  rating: 1|2|3|4|5,
}

export const Reviews = () => {

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
    <div>
      <Carousel slides={renderedReviews} axis="y" autoplayOptions={autoplayOptions} options={carouselOptions} />
      {/* {renderedReviews} */}
    </div>
  );
};