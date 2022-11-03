import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseURL = process.env.REACT_APP_BASE_URL;
const baseQuery = fetchBaseQuery({
      baseUrl: baseURL,
      // baseUrl: 'http://localhost:5000',
      headers: {
            accepts: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            // "content-type": "text/html; charset=utf-8; application/json; text/plain; application/x-www-form-urlencoded; multipart/form-data"
            'content-type': 'application/json'
      }
});
// const baseQuery = fetchBaseQuery();
export const api = createApi({
      reducerPath: 'pizzaApi',
      baseQuery: baseQuery,
      endpoints: () => ({})
});
