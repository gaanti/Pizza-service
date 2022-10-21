import React, { useState } from 'react';
import '../../../../styles/components/__input.scss';
import '../../../../styles/_variables.scss';
import OrderDate from './OrderDate';
import DeliveryAddress from './DeliveryAddress';
import ContactWay from './ContactWay';
import CoffeIcon from './CoffeIcon';
import OrderDetailsButtonGroup from './OrderDetailsButtonGroup';
import ContactPersonField from './ContactPersonField';
import DeliveryTypeAndDescription from './DeliveryTypeAndDescription';

function OrderDetails() {
      const [DeliveryOrPickup, setDeliveryOrPickup] = useState('Pickup');
      const [contactPerson, setContactPerson] = useState('' as string);
      const [city, setCity] = useState('' as string);
      const [street, setStreet] = useState('' as string);

      return (
            <div className="order_details">
                  <article className="l-design-widht">
                        <DeliveryTypeAndDescription DeliveryOrPickup={DeliveryOrPickup} setDeliveryOrPickup={setDeliveryOrPickup} />
                        <hr />
                        <p>Your pizza will be ready exactly when you want!</p>
                        {/*<MakeAPayment />*/}
                        <div className="card card--inverted">
                              <h2>
                                    <svg className="icon" aria-hidden="true">
                                          <use xlinkHref="#icon-coffee" href="#icon-coffee" />
                                    </svg>
                                    Order details
                              </h2>
                              <OrderDate DeliveryOrPickup={DeliveryOrPickup} />
                              <ContactPersonField contactPerson={contactPerson} setContactPerson={setContactPerson} />
                              <DeliveryAddress
                                    DeliveryOrPickup={DeliveryOrPickup}
                                    city={city}
                                    street={street}
                                    setStreet={setStreet}
                                    setCity={setCity}
                              />
                              <ContactWay />
                              <OrderDetailsButtonGroup />
                        </div>
                        /////
                  </article>

                  <CoffeIcon />
            </div>
      );
}

export default React.memo(OrderDetails);
