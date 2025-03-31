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
            <li key={product.id} style={{display: "flex", justifyContent: "space-between", margin: "10px"}}>
              <span>
                {product.name} | &#8377;{product.price}{' '}
              </span>
              <button
                onClick={() => {
                  addProduct(product);
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
