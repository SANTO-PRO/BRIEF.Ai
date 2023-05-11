import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { articleApi } from './apis/articleApi';

const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(articleApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store };
