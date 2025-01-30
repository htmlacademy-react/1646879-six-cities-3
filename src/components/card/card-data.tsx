import { getRandom, getBoolean } from '../../utils';

type CardProps = {
  id?: number;
  premium: boolean;
  img: string;
  price: number;
  ratingStars: number;
  cardName: string;
  cardType: string;
};

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

export {getArrayCards};

