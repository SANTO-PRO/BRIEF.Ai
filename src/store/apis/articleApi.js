import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

const articleApi = createApi({
	reducerPath: 'articles',

	baseQuery: fetchBaseQuery({
		baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',

		prepareHeaders: (headers) => {
			headers.set('X-RapidAPI-Key', rapidApiKey);
			headers.set(
				'X-RapidAPI-Host',
				'article-extractor-and-summarizer.p.rapidapi.com',
			);
		},
	}),

	endpoints: (builder) => {
		return {
			getSummary: builder.query({
				query: () => {
					return {
						url: 'summarize',
						params: {
							url: 'https://time.com/6266679/musk-ai-open-letter/',
							length: '3',
						},
						method: 'GET',
					};
				},
			}),
		};
	},
});

export { articleApi };
