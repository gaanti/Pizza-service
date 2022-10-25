import React from 'react';
import '../../../../../styles/components/__input.scss';
import '../../../../../styles/_variables.scss';
import OrderDate from './OrderDate';
import DeliveryAddress from './DeliveryAddress';
import ContactWay from './ContactWay';
import CoffeIcon from './CoffeIcon';
import ContactPersonField from './ContactPersonField';
import DeliveryTypeAndDescription from './DeliveryTypeAndDescription';
import { deliveryMethod, notifyMethod } from '../../../../../redux/types/order.types';

interface props {
      DeliveryOrPickup: string;
      setDeliveryOrPickup: React.Dispatch<React.SetStateAction<deliveryMethod>>;
      contactPerson: string;
      setContactPerson: React.Dispatch<React.SetStateAction<string>>;
      city: string;
      setCity: React.Dispatch<React.SetStateAction<string>>;
      street: string;
      setStreet: React.Dispatch<React.SetStateAction<string>>;
      contactMethod: notifyMethod;
      setcontactMethod: React.Dispatch<React.SetStateAction<notifyMethod>>;
      handleChange: (event: any) => void;
      contactProvidedByUser: string;
      setContactProvidedByUser: (contact: string) => void;
      getDate: string;
      setGetDate: React.Dispatch<React.SetStateAction<string>>;
}

const OrderDetails: React.FC<props> = ({
      DeliveryOrPickup,
      setDeliveryOrPickup,
      contactPerson,
      setContactPerson,
      city,
      setCity,
      street,
      setStreet,
      contactMethod,
      handleChange,
      contactProvidedByUser,
      setContactProvidedByUser,
      setcontactMethod,
      getDate,
      setGetDate
}) => {
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
                              <OrderDate DeliveryOrPickup={DeliveryOrPickup} getDate={getDate} setGetDate={setGetDate} />
                              <ContactPersonField contactPerson={contactPerson} setContactPerson={setContactPerson} />
                              <DeliveryAddress
                                    DeliveryOrPickup={DeliveryOrPickup}
                                    city={city}
                                    street={street}
                                    setStreet={setStreet}
                                    setCity={setCity}
                              />
                              <ContactWay
                                    contactMethod={contactMethod}
                                    setcontactMethod={setcontactMethod}
                                    handleChange={handleChange}
                                    contactProvidedByUser={contactProvidedByUser}
                                    setContactProvidedByUser={setContactProvidedByUser}
                              />
                        </div>
                        /////
                  </article>
                  <CoffeIcon />
            </div>
      );
};

export default OrderDetails;
