import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "@/lib/storage";

interface Product {
  id: number;
  title: string;
  price: string;
  other_detail: string;
  userPrice: string;
  userCount: number;
}

interface ProductState {
  count: number;
  products: Product[];
  totalPrice: string;
}

const initialState: ProductState = loadState("products") || {
  count: 0,
  products: [],
  totalPrice: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    totalPrice(state) {
      const price = state.products.reduce((accumulator, currentValue) => {
        const priceValue = parseFloat(currentValue.userPrice);
        return accumulator + priceValue;
      }, 0);
      return { ...state, totalPrice: price.toString() };
    },
    setCount(state) {
      const count = state.products.reduce(
        (accumulator, currentValue) => accumulator + currentValue.userCount,
        0
      );
      return { ...state, count: count };
    },
    addProduct(state, action: PayloadAction<Product>) {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        state.products.push({
          ...action.payload,
          userCount: 1,
          userPrice: action.payload.price,
        });
      }
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    removeAllProduct(state) {
      state.products = [];
    },
    toggleAmount(
      state,
      action: PayloadAction<{ id: number; type: "ADD" | "REMOVE" }>
    ) {
      const { id, type } = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        const priceValue = parseFloat(product.price);
        const userPriceValue = parseFloat(product.userPrice);

        if (type === "ADD") {
          product.userCount++;
          product.userPrice = (product.userCount * priceValue)
            .toFixed(2)
            .toString();
        } else if (type === "REMOVE" && product.userCount > 0) {
          product.userCount--;
          product.userPrice = (product.userCount * priceValue)
            .toFixed(2)
            .toString();
        }
      }
    },
  },
});

export default productSlice.reducer;
export const {
  addProduct,
  removeProduct,
  setCount,
  totalPrice,
  toggleAmount,
  removeAllProduct,
} = productSlice.actions;
