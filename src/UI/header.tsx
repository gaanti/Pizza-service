import React, { useEffect, useRef, useState } from 'react';
import CartButton from './pages/cart/cart-button';
import { Link } from 'react-router-dom';
import '../styles/components/live-gradient-border.scss';
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

function Header() {
      const [open, setOpen] = useState(false);
      const pizzasArray = useSelector((state: RootState) => state.cart.items);

      return (
            <div className="header">
                  <div className="header__container">
                        <div className="header__logo">
                              <div className="firstDiv">
                                    <div className="secondDiv ">
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
                        {pizzasArray.length>0?<CartButton />:""}
                  </div>
            </div>
      );
}

export default Header;