import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.js';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';
import { selectCartHidden } from '../../redux/cart/cart.selectors.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import { ReactComponent as Logo } from '../../assest/crown.svg';
import './header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to='/'>
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>
        Shop
      </Link>
      <Link className="option" to='/contact'>
        Contact
      </Link>
      {currentUser ?
        <div className="option" onClick={() => auth.signOut()}> Sign Out </div>
        :
        <Link className="option" to='/signin'> Sign In </Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);


/*
  mapState gets the current state from reducers. then uses connect for the link
*/
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);