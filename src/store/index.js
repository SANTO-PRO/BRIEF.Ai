import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
const store = configureStore({
	reducer: {
		//
	},
	middleware: () => {},
});

setupListeners(store);

export { store };
