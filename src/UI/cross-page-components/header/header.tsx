import React from 'react';
import CartButton from '../../pages/user/cart/cart-button';
import { Link } from 'react-router-dom';
import '../../../styles/components/live-gradient-border.scss';
import BurgerNavigation from './burger-navigation/burger-navigation';

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
                              <Link to="/">
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
                        <div className="DIRECTION_ROW_WITHOUT_GAP header-buttons">
                              <BurgerNavigation />
                              <CartButton />
                        </div>
                  </div>
            </div>
      );
}

export default React.memo(Header);
