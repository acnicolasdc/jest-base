import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.styl';

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">Jest Store</Link>
    </h1>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
      {props.cart.length > 0 && (
        <div className="Header-alert">{props.cart.length}</div>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};

export default connect(mapStateToProps, null)(Header);
