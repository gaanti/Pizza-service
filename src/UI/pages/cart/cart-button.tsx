import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartItemsSelect, cartTotalPriceSelect } from '../../../redux/slices/cart';

function CartButton() {
      const pizzasArray = useSelector(cartItemsSelect);
      const totalCost = useSelector(cartTotalPriceSelect);
      const [quantity, setQuantity] = useState(0);
      useEffect(() => {
            let temp = 0;
            if (pizzasArray) {
                  for (let i = 0; i < pizzasArray.length; i++) {
                        temp += pizzasArray[i].quantity;
                        //setQuantity(quantity + pizzasArray[i].quantity);
                  }
                  setQuantity(temp);
            }
      }, [pizzasArray, totalCost]);

      return (
            <div className="header__cart">
                  <Link to="/cart" className="button button--cart">
                        <span>$ {totalCost}</span>
                        <div className="button__delimiter"></div>
                        <img src="cart.svg" width="18" height="18"></img>
                        <span>{quantity}</span>
                  </Link>
            </div>
      );
}

export default CartButton;
