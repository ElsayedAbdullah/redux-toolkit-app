import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../interface";
import { addItem } from "../../../utils";

export interface cartState {
  cartItems: IProduct[];
}

const initialState: cartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = addItem(state.cartItems, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
