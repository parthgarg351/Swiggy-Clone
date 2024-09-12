import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name : "cart",
    initialState : {
        items: []
    },
    reducers : {
        addItem : (state,action) =>{
            state.items.push(action.payload);
        },
        removeItem : (state,action) =>{
            state.items.pop();
        },
        clearCart : (state,action) =>{
            state.items.length = 0;
            //return {items:[]};  //Either we have to mutate the state or return a new object
        }
    }
});
export const {addItem, removeItem, clearCart} = CartSlice.actions;
export default CartSlice.reducer;