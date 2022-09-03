import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { pagedPizzas } from '../types';

// Define a service using a base URL and expected endpoints
export const pizzaApi = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
      tagTypes: ['PagesQTY'],
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
                  },providesTags: (result) => result?[{type:"PagesQTY" as const, id: result.pizzas.totalPages}]:[{type:"PagesQTY" as const, id: 1}]
            })
      })
});

export const { useGetPizzasQuery } = pizzaApi;
