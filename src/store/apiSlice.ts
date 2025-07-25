import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const BASE_URL = "http://localhost:3000/"

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "users"
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "users",
                method: "POST",
                body: newUser,
            })
        })
    })
})

export const { useGetUsersQuery, useCreateUserMutation } = apiSlice