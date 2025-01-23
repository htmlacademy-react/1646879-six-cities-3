type CardProps = {
  id?: number;
  premium: boolean;
  img: string;
  price: number;
  ratingStars: number;
  cardName: string;
  cardType: string;
};

type PlaceCardCount = {
  placeCardCount: number;
};

export {
  type CardProps,
  type PlaceCardCount
};
