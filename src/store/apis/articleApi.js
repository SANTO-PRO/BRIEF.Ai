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

			return headers;
		},
	}),

	endpoints: (builder) => {
		return {
			getSummary: builder.query({
				query: (params) =>
					`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
			}),
		};
	},
});

export const { useLazyGetSummaryQuery } = articleApi;
export { articleApi };
