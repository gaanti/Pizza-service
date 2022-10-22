import { api } from "./api";
import { PizzaForCart } from "../types";

// Define a service using a base URL and expected endpoints
export const pizzaApi = api.injectEndpoints({
      endpoints: (builder) => ({
            doCheckout: builder.mutation<string, PizzaForCart[]>({
                  query: (somethnig) => {
                        return {
                              url: `checkout`,
                              method: 'POST',
                              body: somethnig,
                              responseHandler: 'text'
                        };
                  }
            })
      })
});

export const { useDoCheckoutMutation } = pizzaApi;
