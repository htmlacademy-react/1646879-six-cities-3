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

export {getRandom, getBoolean};
