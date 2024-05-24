import { createApi, fetchBaseQuery } from "@reduxJs/toolkit/query/react";

const API_URL = "http://localhost:8800/api";

const baseQuery = fetchBaseQuery({baseUrl: API_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: [],
    endpoints: (builder) => ({}),
});