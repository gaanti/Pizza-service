import React from 'react';

function DeliveryTypeAndDescription(props: { setDeliveryOrPickup: (deliveryOrPickup: string) => void; DeliveryOrPickup: string }) {
      return (
            <div>
                  Choose one of two order options:{' '}
                  <div
                        onClick={() => props.setDeliveryOrPickup('Pickup')}
                        className={`chooseOpt ${props.DeliveryOrPickup === 'Pickup' ? 'active' : ''}`}>
                        Pickup
                  </div>{' '}
                  or{' '}
                  <div
                        onClick={() => props.setDeliveryOrPickup('Delivery')}
                        className={`chooseOpt ${props.DeliveryOrPickup === 'Delivery' ? 'active' : ''}`}>
                        Delivery
                  </div>{' '}
                  and the date when you want to get its.
            </div>
      );
}

export default React.memo(DeliveryTypeAndDescription);
