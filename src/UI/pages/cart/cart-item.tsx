import React from 'react';
import { addItemOrIncreaseQuantity, decreasePizzaQuantity, deletePizzaByType, PizzaForCart } from '../../../redux/slices/cart';
import { useDispatch } from 'react-redux';

function CartItem(props: { pizzasInCart: PizzaForCart }) {
      const dispatch = useDispatch();
      return (
            <>
                  <div className="cart__item">
                        <div className="cart__item-img">
                              <img className="pizza-block__image" src={'data:image/jpg;base64,' + props.pizzasInCart.image} alt="Pizza" />
                        </div>
                        <div className="cart__item-info">
                              <h3>{props.pizzasInCart.title}</h3>
                              <p>
                                    {props.pizzasInCart.doughType} crust, {props.pizzasInCart.size}cm.
                              </p>
                        </div>
                        <div className="cart__item-count">
                              <div
                                    className="button button--outline button--plusMinus"
                                    onClick={() =>
                                          dispatch(
                                                addItemOrIncreaseQuantity({
                                                      title: props.pizzasInCart.title,
                                                      image: props.pizzasInCart.image,
                                                      price: props.pizzasInCart.price,
                                                      doughType: props.pizzasInCart.doughType as string,
                                                      size: props.pizzasInCart.size as number,
                                                      quantity: 1
                                                })
                                          )
                                    }>
                                +
                              </div>
                              <div>
                                    <b>{props.pizzasInCart.quantity}</b>
                                    <h6>${props.pizzasInCart.price}/per</h6>
                              </div>
                              <div
                                    className="button button--outline button--plusMinus"
                                    onClick={() =>
                                          dispatch(
                                                decreasePizzaQuantity({
                                                      title: props.pizzasInCart.title,
                                                      image: props.pizzasInCart.image,
                                                      price: props.pizzasInCart.price,
                                                      doughType: props.pizzasInCart.doughType as string,
                                                      size: props.pizzasInCart.size as number,
                                                      quantity: 1
                                                })
                                          )
                                    }>
                                -
                              </div>
                        </div>
                        <div className="cart__item-pizza-cost">
                              <div className="cart__item-pizza-cost-price">
                                    <b>${props.pizzasInCart.quantity * props.pizzasInCart.price}</b>
                              </div>
                              <div className="cart__item-pizza-cost-remove">
                                    <div
                                          onClick={() => {
                                                dispatch(
                                                      deletePizzaByType({
                                                            title: props.pizzasInCart.title,
                                                            image: props.pizzasInCart.image,
                                                            price: props.pizzasInCart.price,
                                                            doughType: props.pizzasInCart.doughType as string,
                                                            size: props.pizzasInCart.size as number,
                                                            quantity: 1
                                                      })
                                                );
                                          }}>
                                          <img src="cancel.svg" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default CartItem;