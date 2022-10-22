import React from 'react';
import { PizzaForCart } from '../../../../../redux/types';
import { useDoCheckoutMutation } from '../../../../../redux/services/order';

function Asd(props: { pizzas: PizzaForCart[] }) {
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
  return <button onClick={makeCheckout}>Checkout</button>;
}

export default React.memo(Asd);