import CartItem from './cart-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { deleteAllPizzas } from '../../../redux/slices/business/cart';
import { useNavigate } from 'react-router-dom';
import CartEmpty from './cart-empty';
import OrderDetails from './OrderDetails/OrderDetails';
import { PizzaForCart } from '../../../redux/types';
import React from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { BsFillCartXFill } from 'react-icons/bs';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function Cart() {

      const navigate = useNavigate();
      const pizzas = useSelector((state: RootState) => state.cart.items);
      const totalCost = useSelector((state: RootState) => state.cart.total_price);
      const dispatch = useDispatch();

      let quantity = 0;

      if (pizzas) {
            for (let i = 0; i < pizzas.length; i++) {
                  quantity += pizzas[i].quantity;
            }
      }
      const CartWithItems = () => {
            return (
                  <div className="content">
                        <div className="container container--cart">
                              <div className="cart">
                                    <div className="cart__top">
                                          <h2 className="content__title">Cart</h2>
                                          <div className="cart__clear" onClick={() => dispatch(deleteAllPizzas())}>
                                                <BsFillCartXFill></BsFillCartXFill>
                                                <span>Make it empty</span>
                                          </div>
                                    </div>
                                    <div className="cart-wrapper">
                                          <div className="cart-wrapper_content">
                                                <div className="cart__items">
                                                      <div>
                                                            {pizzas.map((value: PizzaForCart, index) => {
                                                                  return <CartItem pizzasInCart={value} key={index} index={index} />;
                                                            })}
                                                      </div>
                                                      <div className="cart__bottom-details">
                                                            <span>
                                                                  Total pizzas qty: <b>{quantity}</b>
                                                            </span>
                                                            <span>
                                                                  Order cost: <b>${totalCost}</b>
                                                            </span>
                                                      </div>
                                                </div>
                                                <OrderDetails />
                                          </div>
                                    </div>
                                    <div className="cart__bottom">
                                          <div className="cart__bottom-buttons">

                                                <div
                                                      className="button button--outline button--add go-back-btn"
                                                      onClick={() => navigate(-1)}>
                                                      <IoChevronBackSharp color="#000" />

                                                      <span>Back to homepage</span>
                                                </div>

                                                <button className="button pay-btn" disabled={false}>
                                                      <span>Checkout</span>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            );
      };

      return <>{pizzas?.length ? <CartWithItems /> : <CartEmpty />}</>;
}

export default React.memo(Cart);
