import { createContext } from 'react';
import { ShoppingCartProduct } from './shoppingCartProductReducer';

export interface ShoppingCartContextType {
  products: ShoppingCartProduct[];
  addProduct: (product: ShoppingCartProduct) => void;
  removeProduct: (id: string) => void;
  updateProductQuantityBy: (id: string, quantity: number) => void;
  total: number;
}

const defaultContextValue: ShoppingCartContextType = {
  products: [],
  addProduct: (product: ShoppingCartProduct) => {
    console.log(product);
  },
  removeProduct: (id: string) => {
    console.log(id);
  },
  updateProductQuantityBy: (id: string, quantity: number) => {
    console.log(`product id${id}, quantity ${quantity}`);
  },
  total: 0,
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(defaultContextValue);
