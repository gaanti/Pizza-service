import { api } from "./api";

// Define a service using a base URL and expected endpoints
export const pizzaApi = api.injectEndpoints({
      endpoints: (builder) => ({
            doCheckout: builder.mutation<any, any>({
                  query: (somethnig) => {
                        return {
                              url: `checkout`,
                              method: 'POST',
                              body: somethnig,
                              headers: { 'Access-Control-Allow-Origin': '*' }
                        };
                  }
            })
      })
});

export const { useDoCheckoutMutation } = pizzaApi;
