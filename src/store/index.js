import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
const store = configureStore({
	reducer: {
		//
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat();
	},
});

setupListeners(store.dispatch);

export { store };
