import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': 'afb932572emsh6113b3e3a8c6416p14f5e6jsnb00775d99307',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints:(builder)=>({
getCryptos:builder.query({
    query:(count)=> createRequest(`/coins?limit=${count}`),
})
  })
});


export const {useGetCryptosQuery}=cryptoApi