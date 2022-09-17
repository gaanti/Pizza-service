import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://hope-it-will-work.eu-north-1.elasticbeanstalk.com' });
export const api = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: baseQuery,
      endpoints: () => ({})
});
