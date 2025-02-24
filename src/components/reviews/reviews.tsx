// import { AuthorizationStatus } from '../../const';
import { ReviewProps } from '../../types';
import ReviewForm from './review-form';
import ReviewsList from './reviews-list';

type ReviewsProps = {
  reviews: ReviewProps[];
  isAuth: boolean;
}

function Reviews({reviews, isAuth}: ReviewsProps): JSX.Element {
  return (
    <>
      <ReviewsList reviews={reviews}></ReviewsList>
      {isAuth && <ReviewForm></ReviewForm>}
    </>
  );
}

export default Reviews;
