import {configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productSlice from "./slices/product-slice";
import { ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { storageMiddleWare } from "./middleware";
import { saveState } from '@/lib/storage';
import wishlistSlice from "./slices/wishlist-slice"
export const store = configureStore({
  reducer: {
    products: productSlice,
    wishlist: wishlistSlice
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().prepend(storageMiddleWare.middleware),
})

store.subscribe(() => {
  saveState("products", store.getState().products);
  saveState("wishlist", store.getState().wishlist)
});

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;