import RecommendedProducts from './RecommendedProducts';
import ShoppingCart from './ShoppingCart';
import ShoppingCartContextProvider from './ShoppingCartContextProvider';

const ShoppingCartContainer = () => {
  return (
    <div className="shopping-cart-container">
      <h1>Shopping Cart Container</h1>
      <ShoppingCartContextProvider>
        <ShoppingCart />
        <RecommendedProducts />
      </ShoppingCartContextProvider>
    </div>
  );
};

export default ShoppingCartContainer;
