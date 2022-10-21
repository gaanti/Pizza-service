import React from 'react';
import { PizzaForCart } from '../../../../../redux/types';
import { useDoCheckoutMutation } from "../../../../../redux/services/order";

function Asd(props: { pizzas: PizzaForCart[] }) {
  const [temp, result] = useDoCheckoutMutation();
  const makeCheckout = async () => {
    console.log(props.pizzas);
    await temp(props.pizzas)
    console.log(result);
  }
  return (
            <section>
                  <div className="product">
                        <img src="https://i.imgur.com/EHyR2nP.png" alt="The cover of Stubborn Attachments" />
                        <div className="description">
                              <h3>Stubborn Attachments</h3>
                              <h5>$20.00</h5>
                        </div>
                  </div>
                        <button onClick={makeCheckout}>Checkout</button>
            </section>
      );
}
export default React.memo(Asd)