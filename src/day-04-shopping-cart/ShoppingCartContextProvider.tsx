import { FC, useCallback, useMemo, useReducer } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';
import { shoppingCartProductReducer, initialState, Product } from './shoppingCartProductReducer';

interface ShoppingCartContextProviderProps {
  children: React.ReactNode;
}

const ShoppingCartContextProvider: FC<ShoppingCartContextProviderProps> = ({ children }) => {
  const [products, dispatch] = useReducer(shoppingCartProductReducer, initialState);
  const addProduct = useCallback((payload: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload });
  }, []);

  const removeProduct = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_PRODUCT', id });
  }, []);

  const updateProductQuantity = useCallback((id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  }, []);

  const total = useMemo(() => {
    return products.reduce((acc, p) => p.price * p.quantity + acc, 0);
  }, [products]);

  return (
    <ShoppingCartContext
      value={{
        products,
        addProduct,
        removeProduct,
        updateProductQuantity,
        total,
      }}
    >
      {children}
    </ShoppingCartContext>
  );
};

export default ShoppingCartContextProvider;
