import { CardProps } from '../../types';
import { getRandom, getBoolean } from '../../utils';

const mockCard = (index: number): CardProps => ({
  id: index,
  premium: getBoolean(),
  img: `https://15.design.htmlacademy.pro/static/hotel/${index + 1}.jpg`,
  price: getRandom(156, 385),
  ratingStars: getRandom(60, 100),
  cardName: 'The Joshua Tree House',
  cardType: 'hotel',
});

const getArrayCards = (number: number) => Array.from({length: number}, (_, index) => mockCard(index));
// const cards: CardProps[] = getArrayCards();

export {getArrayCards};

