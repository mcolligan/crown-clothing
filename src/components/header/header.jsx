import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.js';

import { ReactComponent as Logo } from '../../assest/crown.svg';
import './header.scss';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);


/*
  mapState gets the current state from reducers. then uses connect for the link
*/
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);