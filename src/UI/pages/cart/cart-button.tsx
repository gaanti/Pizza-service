import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartItemsSelect, cartTotalPriceSelect } from '../../../redux/slices/business/cart';
import { FaShoppingCart } from 'react-icons/fa';

function CartButton() {
      const pizzasArray = useSelector(cartItemsSelect);
      const totalCost = useSelector(cartTotalPriceSelect);
      const [quantity, setQuantity] = useState(0);
      useEffect(() => {
            let temp = 0;
            if (pizzasArray) {
                  for (let i = 0; i < pizzasArray.length; i++) {
                        temp += pizzasArray[i].quantity;
                  }
                  setQuantity(temp);
            }
      }, [pizzasArray, totalCost]);
      const popo = useMemo(() => {
            let temp = 0;
            if (pizzasArray) {
                  for (let i = 0; i < pizzasArray.length; i++) {
                        temp += pizzasArray[i].quantity;
                  }
            }
            return temp;
      }, [pizzasArray, totalCost, quantity]);

      return (
            <>
                  {pizzasArray.length > 0 && (
                        <div className="header__cart">
                              <Link to="cart" className="button button--cart">
                                    <span>$ {totalCost}</span>
                                    <div className="button__delimiter"></div>
                                    <FaShoppingCart />
                                    <span>{popo}</span>
                              </Link>
                        </div>
                  )}
            </>
      );
}

export default React.memo(CartButton);
