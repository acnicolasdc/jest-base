import React from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import './Checkout.styl';

const Checkout = ({ cart, removeFromCart }) => {
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue.price;
    };
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  const remove = product => () => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h2>Sin Pedidos</h2>}
        {cart.map(item => (
          <div className="Checkout-item" key={item.title}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>{`$${item.price}`}</span>
            </div>
            <button type="button" onClick={remove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

const mapDispatchToProps = {
  removeFromCart: actions.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
