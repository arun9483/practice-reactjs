import { createContext } from 'react';
import { Product, ShoppingCartProduct } from './shoppingCartProductReducer';

export interface ShoppingCartContextType {
  products: ShoppingCartProduct[];
  addProduct: (product: Product) => void;
  removeProduct: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  total: number;
}

const defaultContextValue: ShoppingCartContextType = {
  products: [],
  addProduct: (product: Product) => {
    console.log(product);
  },
  removeProduct: (id: string) => {
    console.log(id);
  },
  updateProductQuantity: (id: string, quantity: number) => {
    console.log(`product id${id}, quantity ${quantity}`);
  },
  total: 0,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(defaultContextValue);
