import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './cartslices';

const CartPage = () => {
  const { items, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
              <span>{item.name} - ${item.price} </span>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={e => handleQuantityChange(item.id, e.target.value)}
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total: ${totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
