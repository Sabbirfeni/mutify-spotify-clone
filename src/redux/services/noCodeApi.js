import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { build } from 'vite'

export const noCodeApi = createApi({
    reducerPath: 'noCodeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://v1.nocodeapi.com/sabbir/spotify/iblZwYTGVvkrOqLE',
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")
            return headers
        }
    }),
    endpoints: (builders) => ({
        getMusic: builders.query({ query: () => '/search?q=pop'})
    })
})

