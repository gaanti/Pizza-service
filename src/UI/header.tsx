import React from 'react';
import CartButton from './pages/cart/cart-button';
import { Link } from 'react-router-dom';
import '../styles/components/live-gradient-border.scss';

function Header() {
      return (
            <div className="header">
                  <div className="container">
                        <div className="header__logo">
                              <div className="firstDiv">
                                    <div className="secondDiv">
                                          <div className="logo">🍕</div>
                                    </div>
                              </div>
                              <div>
                                    <Link to="/">
                                          <h1> React Pizza </h1>
                                    </Link>
                                    <p>The tastiest pizza in the Universe</p>
                              </div>
                        </div>
                        <CartButton />
                  </div>
            </div>
      );
}

export default Header;