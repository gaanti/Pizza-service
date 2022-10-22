import React from 'react';
import { PizzaForCart } from '../../../../../redux/types';
import { useDoCheckoutMutation } from '../../../../../redux/services/order';
import './stripe-checkout-button.scss';

function StripeCheckoutButton(props: { pizzas: PizzaForCart[] }) {
      const [temp, result] = useDoCheckoutMutation();
      const makeCheckout = async () => {
            console.log(result);
            const stripeUrl = await temp(props.pizzas).then((res) => {
                  console.log(res);
                  // @ts-ignore
                  return res.data;
            });
            if (stripeUrl) window.location.href = stripeUrl;
      };
      return (
            <button className="stripe-checkout-button" onClick={makeCheckout}>
                  Checkout with Stripe
            </button>
      );
}

export default React.memo(StripeCheckoutButton);
