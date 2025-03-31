import { faker } from '@faker-js/faker';
import { Product } from './shoppingCartProductReducer';

export function getRandomNumberBetween(a: number, b: number) {
  if (a > b) {
    [a, b] = [b, a]; // Swap if a is greater than b
  }
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function generateMockProducts(count: number): Product[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
  }));
}
