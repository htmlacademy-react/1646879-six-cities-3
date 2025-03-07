import { getRandom, getBoolean, getArray } from '../../utils';
import { ReviewProps } from '../../types';

const REVIEWS_COUNT = getRandom(1, 5);

const mockReviews = (index: number): ReviewProps => ({
  id: `${index}`,
  date: '2019-05-08T14:13:56.569Z',
  user: {
    name: 'Oliver Conner',
    avatarUrl: 'https://thispersondoesnotexist.com/',
    isPro: getBoolean(),
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: getRandom(0, 5),
});


const reviews: ReviewProps[] = getArray(REVIEWS_COUNT, (index: number) => mockReviews(index));

export {reviews};

