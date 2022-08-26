import React from 'react';
import CartItem from './cart-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { deleteAllPizzas } from '../../../redux/slices/cart';
import { Link } from 'react-router-dom';
import CartEmpty from './cart-empty';

function Cart() {
      const pizzas = useSelector((state: RootState) => state.cart.items);
      const totalCost = useSelector((state: RootState) => state.cart.total_price);
      const dispatch = useDispatch();

      let quantity = 0;
      for (let i = 0; i < pizzas.length; i++) {
            quantity += pizzas[i].quantity;
      }
      console.log(pizzas);
      const CartWithItems = () => {
            return (
                  <div className="content">
                        <div className="container container--cart">
                              <div className="cart">
                                    <div className="cart__top">
                                          <h2 className="content__title">
                                                <img src="cart.svg" />
                                                Cart
                                          </h2>
                                          <div className="cart__clear" onClick={() => dispatch(deleteAllPizzas())}>
                                                <img src="trash.svg" />
                                                <span>Clear the cart</span>
                                          </div>
                                    </div>
                                    <div>
                                          {pizzas.map((value: any, index) => {
                                                console.log(value);
                                                return <CartItem pizzasInCart={value} />;
                                          })}
                                    </div>
                                    <div className="cart__bottom">
                                          <div className="cart__bottom-details">
                                                <span>
                                                      Total pizzas: <b>{quantity} шт.</b>
                                                </span>
                                                <span>
                                                      Order cost: <b>${totalCost}</b>
                                                </span>
                                          </div>
                                          <div className="cart__bottom-buttons">
                                                <Link to={'/'} className="button button--outline button--add go-back-btn">
                                                      <img src="grey-arrow-left.svg" />
                                                      <span>Back to homepage</span>
                                                </Link>
                                                <div className="button pay-btn">
                                                      <span>Checkout</span>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      };

      return <>{pizzas.length ? <CartWithItems /> : <CartEmpty />}</>;
}

export default Cart;
