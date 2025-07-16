import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartslices';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Headphones', price: 199 },
  { id: 3, name: 'Smartphone', price: 799 },
  { id: 4, name: 'Keyboard', price: 49 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
