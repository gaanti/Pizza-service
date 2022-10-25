import React from 'react';
import { useDoCheckoutDeliveryMutation, useDoCheckoutPickUpMutation } from '../../../../../redux/services/order';
import './stripe-checkout-button.scss';
import { ImSpinner2 } from 'react-icons/im';
import {
      deliveryAddress,
      deliveryMethod,
      deliveryPizzaOrder,
      notifyMethod,
      pickUpPizzaOrder
} from '../../../../../redux/types/order.types';
import { PizzaForCart } from '../../../../../redux/types/types';

interface props {
      DeliveryOrPickup: deliveryMethod;
      setDeliveryOrPickup: React.Dispatch<React.SetStateAction<deliveryMethod>>;
      contactProvidedByUser: string;
      contactPerson: string;
      setContactPerson: React.Dispatch<React.SetStateAction<string>>;
      city: string;
      setCity: React.Dispatch<React.SetStateAction<string>>;
      street: string;
      setStreet: React.Dispatch<React.SetStateAction<string>>;
      choosedNotifyMethod: notifyMethod;
      pizzas: PizzaForCart[];
      getDate: string;
}

const StripeCheckoutButton: React.FC<props> = ({
      pizzas,
      DeliveryOrPickup,
      contactPerson,
      city,
      street,
      choosedNotifyMethod,
      getDate,
      contactProvidedByUser
}) => {
      const [ckeckoutDelivery, ckeckoutDeliveryResult] = useDoCheckoutDeliveryMutation();
      const [ckeckoutPickUp, ckeckoutPickUpResult] = useDoCheckoutPickUpMutation();
      const createOrder = () => {
            const deliveryAddress: deliveryAddress = {
                  city: city,
                  street: street
            };
            switch (DeliveryOrPickup) {
                  case deliveryMethod.Delivery:
                        const deliveryPizzaOrder: deliveryPizzaOrder = {
                              timeToBeDone: getDate,
                              deliveryAddress: deliveryAddress,
                              contactPerson: contactPerson,
                              notifyField: choosedNotifyMethod != notifyMethod.Nothing ? contactProvidedByUser : undefined,
                              notifyMethod: choosedNotifyMethod,
                              pizzas: pizzas
                        };
                        // @ts-ignore
                        return ckeckoutDelivery(deliveryPizzaOrder).then((res) => res.data);
                  case deliveryMethod.Pickup:
                        const pickUpPizzaOrder: pickUpPizzaOrder = {
                              contactPerson: contactPerson,
                              notifyMethod: choosedNotifyMethod,
                              notifyField: choosedNotifyMethod != notifyMethod.Nothing ? contactProvidedByUser : undefined,
                              timeToBeDone: getDate,
                              pizzas: pizzas
                        };
                        // @ts-ignore
                        return ckeckoutPickUp(pickUpPizzaOrder).then((res) => res.data);
            }
      };
      const makeCheckout = async () => {
            const stripeUrl = await createOrder();
            if (stripeUrl) window.location.href = stripeUrl;
      };
      return (
            <div>
                  {!ckeckoutPickUpResult.isLoading || ckeckoutDeliveryResult.isLoading ? (
                        <button className="button pay-btn" onClick={makeCheckout}>
                              <span>
                                    Checkout
                              </span>
                              <img src="https://i.pinimg.com/originals/5b/e7/15/5be7157c8d58a1b83acf3c4e0f4a267e.gif"
                                   alt="Checkout now!)" />
                        </button>
                  ) : (
                        <ImSpinner2 className="spining-animation" size="25" />
                  )}
            </div>
      );
};

export default React.memo(StripeCheckoutButton);
