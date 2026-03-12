import { createSlice, current } from "@reduxjs/toolkit";

//!part-4 configuration required to make cartSlice
const cartSlice = createSlice({
  //* name of slice
  name: "cart",
  //* initial state of slice
  initialState: {
    items: [],
  },
  /*
   * reducers function. those funtion actually modifies the data into the cart
   * how? so it has acess of this items:[] state and it modify the state with the action
   * those 2 para are required to do this actions
   */
  reducers: {
    //action-> add an item in cart
    addItem: (state, action) => {
      //mutating the state over here
      state.items.push(action.payload);
    },
    //action-> to remove item from end
    removeItem: (state) => {
      state.items.pop();
    },
    //action-> to clear the whole cart
    clearCart: (state) => {
      console.log("Original State", current(state));
      console.log("local state", state);
      console.log("Original State", current(state));
      state.items.length = 0;
    },
  },
});

//
export const { addItem, removeItem, clearCart } = cartSlice.actions;

//exporting reducers
export default cartSlice.reducer;
