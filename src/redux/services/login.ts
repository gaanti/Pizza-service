import { api } from './api';

// Define a service using a base URL and expected endpoints
export const authentication = api.injectEndpoints({
      endpoints: (builder) => ({
            login: builder.mutation<string, loginRequest>({
                  query: (somethnig) => {
                        return {
                              url: `login`,
                              method: 'POST',
                              body: somethnig,
                              responseHandler: 'text'
                        };
                  },
                  transformResponse: (res: { data: loginResponse }) => {
                        return res.data.token;
                  }
            })
      })
});

export interface loginRequest {
      email: string;
      password: string;
}

export interface loginResponse {
      token: string;
}

export const { useLoginMutation } = authentication;
