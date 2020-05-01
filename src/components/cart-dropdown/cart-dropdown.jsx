import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.jsx';
import CartItem from '../cart-item/cart-item.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem =>
            <CartItem key={cartItem.id} item={cartItem}/>
        )
      }
    </div>
    <CustomButton>Go To Check Out</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);