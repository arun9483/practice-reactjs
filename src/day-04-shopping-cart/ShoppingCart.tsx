import { useCallback } from 'react';
import useShoppingCart from './useShoppingCart';
import { getRandomNumberBetween } from './util';

const ShoppingCart = () => {
  const { total, products, removeProduct, updateProductQuantityBy } = useShoppingCart();

  const updateQuantity = useCallback(
    (id: string) => {
      const quantity = getRandomNumberBetween(-10, 100);
      updateProductQuantityBy(id, quantity);
    },
    [updateProductQuantityBy]
  );

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-grand-total">{total}</div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th>row total</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const { id, name, price, quantity } = product;
            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{price * quantity}</td>
                <td>
                  <div>
                    <button onClick={() => removeProduct(id)}>remove product</button>
                    <button onClick={() => updateQuantity(id)}>update product quantity by</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCart;
