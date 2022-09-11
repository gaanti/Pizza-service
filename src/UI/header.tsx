import React from 'react';
import CartButton from './pages/cart/cart-button';
import { Link } from 'react-router-dom';
import '../styles/components/live-gradient-border.scss';

function Header() {
      const Header = () => {
            return (
                  <div className="header__logo">
                        <div className="firstDiv">
                              <div className="secondDiv ">
                                    <div className="logo">🍕</div>
                              </div>
                        </div>

                        <div className="header__logo___textNsubText">
                              <Link to="/pizzas">
                                    <h1> React Pizza </h1>
                              </Link>
                              <p>The tastiest pizza in the Universe</p>
                        </div>
                  </div>
            );
      };
      const MemorizedHeader = React.memo(Header);

      return (
            <div className="header">
                  <div className="header__container">
                        <MemorizedHeader />
                        {/*@ts-ignore*/}
                        <CartButton />
                  </div>
            </div>
      );
}

export default React.memo(Header);