import React, { useMemo } from "react";
import { Link } from 'react-router-dom';
import "./go-shopping-button.scss"

import CartButton from "../../pages/cart/cart-button";

function GoShoppingButton() {
  const Header = () => {
    return(
      <div className="header__logo">
        <div className="firstDiv">
          <div className="secondDiv ">
            <div className="logo_">
              <div>
                <img src="power.svg" alt="power.svg" />
              </div></div>
          </div>
        </div>

        <div className="header__logo___textNsubText">
          <Link to="/pizzas">
            <h1> Parametrize it any way you want! </h1>
          </Link>
        </div>
      </div>)
  }
  const MemorizedHeader = React.memo(Header)

  return (
    <div className="header" style={{position: "relative"}}>
      <div className="header__container">
        <MemorizedHeader/>
      </div>
    </div>
  );
}

export default GoShoppingButton;

