import { useState } from 'react';
import { CardProps } from './types';
import { MAX_RATING } from './const';

function useActiveOffer() {
  const [activeOffer, setActiveOffer] = useState<CardProps | null>(null);
  const handleCardHover = (offer?: CardProps) => {
    setActiveOffer(offer || null);
  };

  return {activeOffer, handleCardHover};
}

const getArray = <T,>(count: number, mockData: (index: number) => T): T[] => Array.from({length: count}, (_, index) => mockData(index));

const getRatingPercentage = (rating: number) => (rating * 100) / MAX_RATING;

function getRandom(min: number, max: number): number {
  if (min >= max) {
    throw new Error('Диапазон включает только положительные числа. Число "от" не может быть больше или равно числу "до".');
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  const random = min + Math.random() * (max - min + 1);
  return Math.floor(random);
}

const getBoolean = () => Boolean(getRandom(0, 1));

export {
  getArray,
  getRatingPercentage,
  useActiveOffer,
  getRandom,
  getBoolean
};
