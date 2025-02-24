import { CITIES } from './const';

type PageType = 'main' | 'offer' | 'favorites';
type City = typeof CITIES[number];
type TypeHousing = 'apartment' | 'room' | 'house' | 'hotel';

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type CityType = {
  name: City;
  location: LocationType;
};

type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type CardProps = {
  id: string;
  title: string;
  type: TypeHousing;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  description: string;
  bedrooms: number;
  goods: string[];
  host: HostType;
  images: string[];
  maxAdults: number;
};

type ReviewProps = {
  id: string;
  date: string;
  user: HostType;
  comment: string;
  rating: number;
}

export {
  type PageType,
  type CardProps,
  type ReviewProps,
};
