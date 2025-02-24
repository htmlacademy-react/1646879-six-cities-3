import { getRandom, getBoolean } from '../../utils';
import { CardProps } from '../../types';
import { CITIES } from '../../const';
import { getArray } from '../../utils';

const CARDS_COUNT = 5;

const mockCard = (index: number): CardProps => ({
  id: `${index}`,
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: getRandom(156, 385),
  city: {
    name: CITIES[getRandom(0, 5)],
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  },
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8,
  },
  isFavorite: getBoolean(),
  isPremium: getBoolean(),
  rating: getRandom(0, 5),
  previewImage: `https://15.design.htmlacademy.pro/static/hotel/${index + 1}.jpg`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of ${CITIES[getRandom(0, 5)]}.`,
  bedrooms: getRandom(1, 3),
  goods: [
    'Heating',
    'Towels',
    'Wi-Fi',
    'Washing machine',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Kitchen',
    'Cabel TV',
    'Fridge'
  ],
  host: {
    name: 'Oliver Conner',
    avatarUrl: 'https://thispersondoesnotexist.com/',
    isPro: getBoolean(),
  },
  images: [
    `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`,
    `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`,
    `https://placedog.net/${getRandom(300, 340)}/${getRandom(200, 240)}`,
  ],
  maxAdults: getRandom(2, 5),
});


const offers: CardProps[] = getArray(CARDS_COUNT, (index: number) => mockCard(index));

export {offers};

