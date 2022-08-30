import React, { useMemo } from "react";
import CartButton from './pages/cart/cart-button';
import { Link } from 'react-router-dom';
import '../styles/components/live-gradient-border.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

function Header() {


      const Header = () => {
            return(
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
            </div>)
      }
      const MemorizedHeader = React.memo(Header)

      const Popo = () => {
            const pizzasArray = useSelector((state: RootState) => state.cart.items);
            return pizzasArray.length > 0 ? <CartButton /> : ''
      }

      return (
            <div className="header">
                  <div className="header__container">
                        <MemorizedHeader/>
                        {/*@ts-ignore*/}
                        <CartButton/>
                  </div>
            </div>
      );
}

export default Header;