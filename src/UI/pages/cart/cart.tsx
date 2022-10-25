import CartItem from './cart-item';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { deleteAllPizzas } from '../../../redux/slices/business/cart';
import { useNavigate } from 'react-router-dom';
import CartEmpty from './cart-empty';
import OrderDetails from './OrderDetails/OrderDetails';
import { PizzaForCart } from '../../../redux/types/types';
import React, { useState } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { BsFillCartXFill } from 'react-icons/bs';
import StripeCheckoutButton from './OrderDetails/checkout/stripe-checkout-button';
import { deliveryMethod, notifyMethod } from '../../../redux/types/order.types';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function Cart() {
      const pizzas = useSelector((state: RootState) => state.cart.items);
      const CartWithItems = () => {
            const navigate = useNavigate();
            const totalCost = useSelector((state: RootState) => state.cart.total_price);
            const dispatch = useDispatch();
            const [openCheckout, setOpenCheckout] = useState(false);
            const [DeliveryOrPickup, setDeliveryOrPickup] = useState<deliveryMethod>(deliveryMethod.Pickup);
            const [contactMethod, setcontactMethod] = useState<notifyMethod>(notifyMethod.Telegram);
            const [contactProvidedByUser, setContactProvidedByUser] = useState('');
            const [contactPerson, setContactPerson] = useState('');
            const [city, setCity] = useState('');
            const [street, setStreet] = useState('');
            const handleChange = (event: any) => {
                  setcontactMethod(event.target.value);
            };
            const [getDate, setGetDate] = useState(new Date().toJSON());

            let quantity = 0;
            if (pizzas) {
                  for (let i = 0; i < pizzas.length; i++) {
                        quantity += pizzas[i].quantity;
                  }
            }
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
                                                <OrderDetails
                                                      DeliveryOrPickup={DeliveryOrPickup}
                                                      setDeliveryOrPickup={setDeliveryOrPickup}
                                                      contactPerson={contactPerson}
                                                      setContactPerson={setContactPerson}
                                                      city={city}
                                                      setCity={setCity}
                                                      street={street}
                                                      setStreet={setStreet}
                                                      contactMethod={contactMethod}
                                                      setcontactMethod={setcontactMethod}
                                                      handleChange={handleChange}
                                                      contactProvidedByUser={contactProvidedByUser}
                                                      setContactProvidedByUser={setContactProvidedByUser}
                                                      getDate={getDate}
                                                      setGetDate={setGetDate}
                                                />
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

                                                <div>
                                                      <StripeCheckoutButton
                                                            DeliveryOrPickup={DeliveryOrPickup}
                                                            setDeliveryOrPickup={setDeliveryOrPickup}
                                                            contactProvidedByUser={contactProvidedByUser}
                                                            contactPerson={contactPerson}
                                                            setContactPerson={setContactPerson}
                                                            city={city}
                                                            setCity={setCity}
                                                            street={street}
                                                            setStreet={setStreet}
                                                            choosedNotifyMethod={contactMethod}
                                                            pizzas={pizzas}
                                                            getDate={getDate}
                                                      />
                                                </div>
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
