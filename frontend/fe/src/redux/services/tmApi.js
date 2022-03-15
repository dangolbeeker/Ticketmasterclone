import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';


    const API_KEY ='3er65DQ0rElbfzXfAJ1xlbzVI0k1OkNf';
 



const baseUrl = 'https://app.ticketmaster.com/discovery/v2/'


const createRequest = (url) => ({ url, headers: API_KEY})

export const tmEventApi = createApi({
    reducerPath: 'tmApi',

    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getEvents: builder.query({
            query: (id) => createRequest(`/events/{id}`)
        }),
    }),
})

export const { useGetEventsQuery } = tmApi