import { useContext } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (context) {
    return context;
  } else {
    throw new Error('useShoppingCart is used outside of ShoppingCartContextProvider!');
  }
};

export default useShoppingCart;
