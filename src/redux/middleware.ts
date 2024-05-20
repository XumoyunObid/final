import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { addProduct,
  removeProduct,
  setCount,
  toggleAmount, totalPrice
  } from "./slices/product-slice";

  import { addWishlist, removeWishlist, setWishlistCount } from "./slices/wishlist-slice";

const storageMiddleWare = createListenerMiddleware();

storageMiddleWare.startListening({
  matcher: isAnyOf(
    addProduct,
    removeProduct,
    toggleAmount,
    addWishlist,
    removeWishlist
  ),
  effect: (_, api) => {
    api.dispatch(setCount());
    api.dispatch(totalPrice());
    api.dispatch(setWishlistCount())
  },
});

export { storageMiddleWare };