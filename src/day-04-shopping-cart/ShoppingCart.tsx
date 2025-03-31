import useShoppingCart from './useShoppingCart';
import './ShoppingCart.css';
import React from 'react';
// const rupeeSymbol = '&#8377;';
const ShoppingCart = () => {
  const { total, products, removeProduct, updateProductQuantity } = useShoppingCart();

  return (
    <div className="shopping-cart">
      <div className="shopping-cart-grand-total">
        <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Grand Total: &#8377;{total.toFixed(2)}</span>
      </div>
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
                <td>{(price * quantity).toFixed(2)}</td>
                <td>
                  <div className="actions">
                    <button onClick={() => updateProductQuantity(id, quantity - 1)} disabled={quantity == 1}>
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      step={1}
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = +event.target.value;
                        if (!Number.isNaN(value) && value > 0) {
                          updateProductQuantity(id, value);
                        } else {
                          updateProductQuantity(id, quantity);
                        }
                      }}
                    />
                    <button onClick={() => updateProductQuantity(id, quantity + 1)}>+</button>
                    <button onClick={() => removeProduct(id)}>remove</button>
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
