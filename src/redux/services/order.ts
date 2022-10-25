import { api } from './api';
import { deliveryPizzaOrder, pickUpPizzaOrder } from '../types/order.types';

// Define a service using a base URL and expected endpoints
export const pizzaApi = api.injectEndpoints({
      endpoints: (builder) => ({
            doCheckoutDelivery: builder.mutation<string, deliveryPizzaOrder | pickUpPizzaOrder>({
                  query: (somethnig) => {
                        return {
                              url: `checkout-delivery`,
                              method: 'POST',
                              body: somethnig,
                              responseHandler: 'text'
                        };
                  }
            }),
            doCheckoutPickUp: builder.mutation<string, deliveryPizzaOrder | pickUpPizzaOrder>({
                  query: (somethnig) => {
                        return {
                              url: `checkout-pickUp`,
                              method: 'POST',
                              body: somethnig,
                              responseHandler: 'text'
                        };
                  }
            })
      })
});

export const { useDoCheckoutDeliveryMutation, useDoCheckoutPickUpMutation } = pizzaApi;
