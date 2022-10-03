import React from 'react';
import { decrease, increase } from '../../../redux/slices/cart';
import { useDispatch } from 'react-redux';
import { PizzaForCart } from '../../../redux/types';

function CartItem(props: { pizzasInCart: PizzaForCart; index: number }) {
      const dispatch = useDispatch();
      console.log(props.pizzasInCart);

      return (
            <>
                  <div className="cart__item">
                        <div className="cart__item-img">
                              <img className="pizza-block__image" src={'data:image/jpg;base64,' + props.pizzasInCart.image} alt="Pizza" />
                        </div>
                        <div className="cart__item-info">
                              <h3>{props.pizzasInCart.title}</h3>
                              <div>
                                    <div>
                                          {props.pizzasInCart.doughWidth}, {props.pizzasInCart.doughRadius}cm.
                                    </div>
                                    <div>{props.pizzasInCart.ingredients.join(', ')}</div>
                              </div>
                        </div>
                        <div className="cart__item-count">
                              <div className="button button--outline button--plusMinus" onClick={() => dispatch(decrease(props.index))}>
                                    -
                              </div>

                              <div>
                                    <b>{props.pizzasInCart.quantity}</b>
                                    <h6>${props.pizzasInCart.price}/per</h6>
                              </div>
                              <div className="button button--outline button--plusMinus" onClick={() => dispatch(increase(props.index))}>
                                    +
                              </div>
                        </div>
                        <div className="cart__item-pizza-cost">
                              <div className="cart__item-pizza-cost-price">
                                    <b>${props.pizzasInCart.quantity * props.pizzasInCart.price}</b>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default CartItem;
