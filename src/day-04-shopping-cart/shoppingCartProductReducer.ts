import { nanoid } from 'nanoid';

export interface ShoppingCartProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export const initialState: ShoppingCartProduct[] = [
  { id: nanoid(), name: 'Laptop', price: 1200, quantity: 1 },
  { id: nanoid(), name: 'Headphones', price: 150, quantity: 2 },
];

type Action = { type: 'ADD_PRODUCT'; payload: ShoppingCartProduct } | { type: 'REMOVE_PRODUCT'; id: string } | { type: 'UPDATE_QUANTITY_BY'; id: string; quantity: number };

export const shoppingCartProductReducer = (state: ShoppingCartProduct[], action: Action) => {
  let product: ShoppingCartProduct | undefined = undefined;
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, { ...action.payload }];
    case 'REMOVE_PRODUCT':
      return state.filter((p) => p.id !== action.id);
    case 'UPDATE_QUANTITY_BY':
      product = state.find((p) => p.id === action.id);
      if (product) {
        if (action.quantity < 0 && product.quantity - action.quantity <= 0) {
          // update quantity is less than or equal to zero so remove item;
          return state.filter((p) => p.id !== action.id);
        } else {
          return state.map((p) => {
            if (p.id === action.id) {
              return {
                ...p,
                quantity: p.quantity + action.quantity,
              };
            } else {
              return p;
            }
          });
        }
      } else {
        console.error(`product with id ${action.id} not found`);
        return state;
      }
    default:
      return state;
  }
};
