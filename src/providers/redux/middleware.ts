import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { addProduct,
  removeProduct,
  setCount,
  toggleAmount, totalPrice
  } from "./slices/product-slice";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(
    addProduct,
    removeProduct,
    toggleAmount
  ),
  effect: (_, api) => {
    api.dispatch(setCount());
    api.dispatch(totalPrice());
  },
});

export { storageMiddleWare };