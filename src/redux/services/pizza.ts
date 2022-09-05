import { pagedPizzas } from '../types';
import { api } from "./api";

// Define a service using a base URL and expected endpoints
export const pizzaApi = api.injectEndpoints({
      endpoints: (builder) => ({
            getPizzas: builder.query<pagedPizzas, any>({
                  query: ({ sortBy, filterByCategory, currentPage, filterTitle }) => {
                        const sortBy1 = `sortBy=${sortBy ? sortBy : 'price'}`;
                        const filterByCategory1 = `&filterByCategoryId=${filterByCategory ? filterByCategory : '0'}`;
                        const currentPage1 = `&currentPage=${currentPage > 0 ? currentPage : 0}`;
                        const filterTitle1 = filterTitle ? `&filterByTitle=${filterTitle}` : '';
                        return {
                              url: `pizzas?${sortBy1}${filterByCategory1}${currentPage1}${filterTitle1}`
                        };
                  }
            })
      })
});



export const { useGetPizzasQuery } = pizzaApi;