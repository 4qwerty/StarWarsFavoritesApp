import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICharacterResponse, ICharacter} from "types/сharacter.ts";


const baseUrl = process.env.API_BASE_URL || 'https://swapi.dev/api';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    return headers;
  },
});

export const swApi = createApi({
  reducerPath: 'swApi',
  baseQuery: async (args, api, extraOptions) => {
    try {
      const result = await baseQuery(args, api, extraOptions);
      if (result.error) {
        console.error('API error:', result.error);
      }
      return result;
    } catch (error) {
      console.error('Network error:', error);
      throw error;
    }
  },
  endpoints: (builder) => ({
    getCharacterList: builder.query<ICharacterResponse, number | undefined>({
      query: (page = 1) => `people/?page=${page}`,
    }),
    getCharacter: builder.query<ICharacter, string>({
      query: (id) => `people/${id}/`,
    }),
  }),
});

export const {
  useGetCharacterListQuery,
  useGetCharacterQuery,
} = swApi;
