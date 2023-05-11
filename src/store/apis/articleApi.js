import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const articleApi = createApi({
	reducerPath: 'articles',

	baseQuery: fetchBaseQuery({
		baseUrl: '',
	}),

	endpoints: (builder) => {
		return {
			fetchArticles: builder.query({
				query: () => {
					return {
						url: '',
						params: {},
						method: 'GET',
					};
				},
			}),
		};
	},
});

export { articleApi };
