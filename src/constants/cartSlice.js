import { createSlice } from "@reduxjs/toolkit";

//Redux

const cartSlice = createSlice ({
    name : "cart",
    initialState : {
        items : [],
    },

    reducers : {
        addItems : (state, action) => {
            state.items.push(action.payload);
        },
        removeItem : (state, action) => {
            const indexToRemove = action.payload;
            state.items.splice(indexToRemove, 1);
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;
export const {addItems, removeItem, clearCart} = cartSlice.actions;