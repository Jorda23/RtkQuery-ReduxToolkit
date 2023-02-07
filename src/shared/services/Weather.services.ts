import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { api_key, weatherApiUrl } from '../utils/configEnv';
import { WeatherResponse } from '../models/WeatherResponse'
import { WeatherParamRequest } from '../models/WeatherParamRequest';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: weatherApiUrl,
  }),
  endpoints: builder => ({
    getWeatherConditionByCity: builder.query<WeatherResponse, string>({
      query: search => `/forecast?q=${search}&lang=sp&units=metric&appid=${api_key}`,
    }),
  }),
});

export const { useGetWeatherConditionByCityQuery  } = weatherApi;