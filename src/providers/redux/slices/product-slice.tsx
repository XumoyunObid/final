import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  images: {
    image:string;
    image_id:number;
  }[]
  title: string;
  price: string;
}

interface ProductState {
  products: Product[];
  count: number;
  totalPrice: number;
}

const initialState: ProductState = {
  products: [],
  count: 0,
  totalPrice: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // totalPrice(state) {
    //   const price = state.products.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue.userPrice,
    //     0
    //   );
    //   state.totalPrice = price;
    // },
    // setCount(state) {
    //   const count = state.products.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue.userCount,
    //     0
    //   );
    //   state.count = count;
    // },
    addProduct(state, action: PayloadAction<Product>) {
      const idf = state.products.find((item) => item.id === action.payload.id);
      if (!idf) {
        state.products.push({
          ...action.payload
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
    // toggleAmount(state, action: PayloadAction<{ id: number; type: "ADD" | "REMOVE" }>) {
    //   const { id, type } = action.payload;
    //   const product = state.products.find((item) => item.id === id);
    //   if (product) {
    //     if (type === "ADD") {
    //       product.userCount++;
    //       product.userPrice = product.userCount * product.price;
    //     } else if (type === "REMOVE" && product.userCount > 0) {
    //       product.userCount--;
    //       product.userPrice = product.userCount * product.price;
    //     }
    //   }
    // },
  },
});

export default productSlice.reducer;
export const {
  addProduct,
  // setCount,
  removeProduct,
  // totalPrice,
  // toggleAmount,
  removeAllProduct,
} = productSlice.actions;
