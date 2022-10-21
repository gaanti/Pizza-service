import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseQuery = fetchBaseQuery({ baseUrl: 'http://hope-it-will-work.eu-north-1.elasticbeanstalk.com' });
const baseQuery = fetchBaseQuery({
      baseUrl: 'https://react-pizza-backend0.herokuapp.com',
      // baseUrl: 'http://localhost:5000',
      headers: {
            accepts: 'application/json'
      }
});
// const baseQuery = fetchBaseQuery();
export const api = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: baseQuery,
      endpoints: () => ({})
});
