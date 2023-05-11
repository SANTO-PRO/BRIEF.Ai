import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
	method: 'GET',
	url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
	params: {
		url: 'https://time.com/6266679/musk-ai-open-letter/',
		length: '3',
	},
	headers: {
		'X-RapidAPI-Key': '5ee2a39dc0mshd55c54002ad467cp175c30jsn44026b3055e8',
		'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com',
	},
};

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
