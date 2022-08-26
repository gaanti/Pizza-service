import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

function CartButton() {
      const pizzasArray = useSelector((state: RootState) => state.cart.items);
      const totalCost = useSelector((state: RootState) => state.cart.total_price);
      const [quantity, setQuantity] = useState(0);
      useEffect(() => {
            let o = 0;
            for (let i = 0; i < pizzasArray.length; i++) {
                  o += pizzasArray[i].quantity;
                  setQuantity(quantity + pizzasArray[i].quantity);
            }
            setQuantity(o);
            console.log('items in cart: ' + quantity);
      }, [pizzasArray, totalCost]);

      return (
            <div className="header__cart">
                  <Link to="cart" className="button button--cart">
                        <span>$ {totalCost}</span>
                        <div className="button__delimiter"></div>
                        <img src="cart.svg" width="18" height="18"></img>
                        <span>{quantity}</span>
                  </Link>
            </div>
      );
}

export default CartButton;