import React, { useMemo } from "react";
import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const MakeAPayment = () => {
  const stripePromise = useMemo(() => loadStripe(
    'pk_test_51Luj1gE3rpIhISk01c3MchGNSKCBvgHaxar5Iy8vgdBgfmQfjmJySIWwUG03TOqT6cf6m47K862tBy04as9jOQdK00nuwy1boP'
  ), [])
  return (
            <Elements stripe={stripePromise}>
                  <CardElement />
            </Elements>
      );
}
export default React.memo(MakeAPayment);