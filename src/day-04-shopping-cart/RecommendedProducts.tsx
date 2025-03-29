import useShoppingCart from './useShoppingCart';
import { generateMockProducts } from './util';

const products = generateMockProducts(10);

const RecommendedProducts = () => {
  const { addProduct } = useShoppingCart();
  return (
    <div>
      <h3>Recommended Products</h3>
      <ol>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} | {product.price}{' '}
              <button
                onClick={() => {
                  addProduct({ ...product, quantity: 1 });
                }}
              >add to cart</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default RecommendedProducts;
