import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:8080' });
export const api = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: baseQuery,
      endpoints: () => ({})
});
