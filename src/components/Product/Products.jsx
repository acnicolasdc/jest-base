import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import './Products.styl';
import Product from './Product';

const Products = ({ products, addToCart }) => {
  const handleAddToCart = product => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => {
  return {
    products,
  };
};

const mapDispatchToProps = {
  addToCart: actions.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
