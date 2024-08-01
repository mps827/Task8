import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import errorSlice from "./error-slice";
import loadingSlice from "./loading-slice";
import advertisementSlice from "./advertisement-slice";
import searchSlice from "./search-slice";
const store = configureStore({
  reducer: {
    error: errorSlice,
    loading: loadingSlice,
    auth: authSlice,
    advertisement: advertisementSlice,
    search: searchSlice
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
