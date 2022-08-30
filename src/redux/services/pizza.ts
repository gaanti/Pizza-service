import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pagedPizzas } from '../types';

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
      tagTypes: ['Pizzas'],
      endpoints: (builder) => ({
            getPizzas: builder.query<pagedPizzas, any>({
                  query: ({ sortBy, filterByCategory, currentPage, filterTitle }) => {
                        const sortBy1 = `sortBy=${sortBy ? sortBy : 'price'}`;
                        const filterByCategory1 = `&filterByCategory=${filterByCategory ? filterByCategory : 'All'}`;
                        const currentPage1 = `&currentPage=${currentPage > 0 ? currentPage : 0}`;
                        const filterTitle1 = filterTitle ? `&filterByTitle=${filterTitle}` : '';
                        return {
                              url: `pizzas?${sortBy1}${filterByCategory1}${currentPage1}${filterTitle1}`
                        };
                  }
            })
      })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPizzasQuery } = pizzaApi;
