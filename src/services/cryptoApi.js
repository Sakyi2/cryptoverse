import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
  
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '15c8272e50mshe3c9f9755044d3ep169ed7jsnb10aced8c57c',
}


const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({url,headers: cryptoApiHeaders})


export const cryptoApi = createApi({
  reducerPath:"cryptoApi",
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints:(builder) => ({
    getCryptos:builder.query({
      query:(count) => createRequest( `/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query:(coinId) => createRequest(`/coin/${coinId}`)
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
  })
})


export const {
  useGetCryptosQuery,  useGetExchangesQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi;