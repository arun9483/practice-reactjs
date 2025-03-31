import { generateMockProducts } from './util';

export interface Product {
  id: string;
  name: string;
  price: number;
}

export interface ShoppingCartProduct extends Product {
  quantity: number;
}

export const initialState: ShoppingCartProduct[] = generateMockProducts(3).map((p) => ({ ...p, quantity: 1 }));

type Action = { type: 'ADD_PRODUCT'; payload: Product } | { type: 'REMOVE_PRODUCT'; id: string } | { type: 'UPDATE_QUANTITY'; id: string; quantity: number };

export const shoppingCartProductReducer = (state: ShoppingCartProduct[], action: Action) => {
  let product: ShoppingCartProduct | undefined = undefined;
  switch (action.type) {
    case 'ADD_PRODUCT':
      product = state.find((p) => p.id === action.payload.id);
      if (product) {
        return state.map((p) => {
          if (action.payload.id === p.id) {
            return {
              ...p,
              quantity: p.quantity + 1,
            };
          } else {
            return p;
          }
        });
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    case 'REMOVE_PRODUCT':
      return state.filter((p) => p.id !== action.id);
    case 'UPDATE_QUANTITY':
      return state.map((p) => {
        if (p.id === action.id) {
          return {
            ...p,
            quantity: action.quantity > 0 ? action.quantity : p.quantity,
          };
        } else {
          return p;
        }
      });
    default:
      return state;
  }
};
