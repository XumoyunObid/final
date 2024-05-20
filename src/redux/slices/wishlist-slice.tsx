import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "@/lib/storage";

interface Product {
  id: number;
  title: string;
  price: string;
  other_detail: string;
  is_available: boolean;
  userPrice: string;
  userCount: number;
  images: {
    image:string;
    image_id: number;
  }[]
}

interface ProductState {
  wishlistCount: number;
  wishlist: Product[];
}

const initialState: ProductState = loadState("wishlist") || {
  wishlistCount: 0,
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistCount(state) {
      const wishlistCount = state.wishlist.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userCount,
        0
      );
      return { ...state, wishlistCount: wishlistCount };
    },
    addWishlist(state, action: PayloadAction<Product>) {
      const idf = state.wishlist.find((item) => item.id === action.payload.id);
      if (!idf) {
        state.wishlist.push({
          ...action.payload,
          userCount: 1,
        });
      }
    },
    removeWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export default wishlistSlice.reducer;
export const {
  addWishlist,
  removeWishlist,
  setWishlistCount,
} = wishlistSlice.actions;
