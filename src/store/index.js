import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./slices/testSlice";

const store = configureStore({
    reducer: {
        test: testReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;