import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  totalAmount: 0,
};
console.log(initialState);
const CalculateTotelAmount = (item) => {
  let totalAmount = 0;
  for (const item of item) {
    totalAmount += item.price * item.quantity;
  }
  return totalAmount;
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
        state.totalAmount += item.price;
        state.name = item.name;

        return;
      }

      const newItem = { ...action.payload, quantity: 1 }; // Ensure quantity is set to 1 for new items
      state.item.push(newItem);
      state.totalAmount += newItem.price;
    },

    editItem: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload.id);
      if (item) {
        const prevTOtalPrice = item.price * item.quantity; //Calculate the previous total price of the item
        item.quantity = action.payload.quantity; //Update the quantity of the item
        const newTotalPrice = item.price * item.quantity; //Calculate the new total price of the item

        //Update the total amount by subtracting the previous total price and adding the new total price
        state.totalAmount = state.totalAmount - prevTOtalPrice + newTotalPrice;
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id;
      console.log(itemIdToRemove);
      const indexToRemove = state.item.findIndex(
        (item) => item.id === itemIdToRemove
      );

      if (indexToRemove !== -1) {
        const removedItem = state.item[indexToRemove];

        // Subtract the total price of the removed item
        state.totalAmount -= removedItem.price * removedItem.quantity;

        // Remove the item from array
        state.item.splice(indexToRemove, 1);
      } else {
        console.error("Item not found in cart:", itemIdToRemove);
      }
    },
    clearCart: (state) => {
      state.item = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
