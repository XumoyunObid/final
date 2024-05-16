import {configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productSlice from "./slices/product-slice";
import { saveState } from "@/lib/storage";
import { ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { storageMiddleWare } from "./middleware";
export const store = configureStore({
  reducer: {
    products: productSlice
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
})

store.subscribe(() => {
  saveState("products", store.getState().products);
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;