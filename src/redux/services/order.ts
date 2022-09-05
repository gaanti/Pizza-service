import { api } from './api';

// Define a service using a base URL and expected endpoints
export const pizzaApi = api.injectEndpoints({
      endpoints: (builder) => ({
            createAnDeliveryOrder: builder.query<any, any>({
                  query: ({}) => {
                        
                        return {
                              url: `pizzas?`
                        };
                  }
            }),
            createAnPickupOrder: builder.query<any, any>({
                  query: ({}) => {

                        return {
                              url: `pizzas?`
                        };
                  }
            })
      })
});

export const { useCreateAnDeliveryOrderQuery } = pizzaApi;
