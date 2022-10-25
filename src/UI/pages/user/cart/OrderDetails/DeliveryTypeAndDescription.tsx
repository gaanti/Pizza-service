import React from 'react';
import { deliveryMethod } from '../../../../../redux/types/order.types';

function DeliveryTypeAndDescription(props: {
      setDeliveryOrPickup: React.Dispatch<React.SetStateAction<deliveryMethod>>;
      DeliveryOrPickup: string;
}) {
      return (
            <div>
                  Choose one of two order options:{' '}
                  <div
                        onClick={() => props.setDeliveryOrPickup(deliveryMethod.Pickup)}
                        className={`chooseOpt ${props.DeliveryOrPickup === deliveryMethod.Pickup ? 'active' : ''}`}>
                        Pickup
                  </div>{' '}
                  or{' '}
                  <div
                        onClick={() => props.setDeliveryOrPickup(deliveryMethod.Delivery)}
                        className={`chooseOpt ${props.DeliveryOrPickup === deliveryMethod.Delivery ? 'active' : ''}`}>
                        Delivery
                  </div>{' '}
                  and the date when you want to get its.
            </div>
      );
}

export default React.memo(DeliveryTypeAndDescription);
