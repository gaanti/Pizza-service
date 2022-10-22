import React from "react";
import { PizzaForCart } from "../../../../../redux/types";
import { useDoCheckoutMutation } from "../../../../../redux/services/order";
import "./stripe-checkout-button.scss";
import { ImSpinner2 } from "react-icons/im";

function StripeCheckoutButton(props: { pizzas: PizzaForCart[] }) {
  const [temp, result] = useDoCheckoutMutation();
  const makeCheckout = async () => {
    console.log(result.isLoading);
    const stripeUrl = await temp(props.pizzas).then((res) => {
      console.log(res);
      // @ts-ignore
      return res.data;
    });
    if (stripeUrl) window.location.href = stripeUrl;
  };
  return (
    <div>
      {(!result.isLoading) ?
      <button className="stripe-checkout-button" onClick={makeCheckout}>
        Checkout with Stripe
      </button> : <ImSpinner2 className="spining-animation" size="25"/>}
    </div>
  )

}

export default React.memo(StripeCheckoutButton);
