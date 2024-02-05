import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const cryptoNewsHeaders =  {
  'X-BingApis-SDK': 'true',
  'X-RapidAPI-Key': '15c8272e50mshe3c9f9755044d3ep169ed7jsnb10aced8c57c',
  'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics'
  const createRequest= (url) => ({url , headers: cryptoNewsHeaders})


  export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
      getCryptoNews:builder.query({
        query:({newsCategory,count}) =>  createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    })
  })

  export const {useGetCryptoNewsQuery} = cryptoNewsApi