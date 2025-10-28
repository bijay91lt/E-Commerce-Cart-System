import { createSlice } from '@reduxjs/toolkit';
import type { CartItem } from '../types';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@reduxjs/toolkit/query';

interface CartState{
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: {payload: number }){
            const productId = action.payload;
            const existingItem = state.items.find(item => item.productId === productId);

            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ productId, quantity: 1});
            }
        },
        removeItem(state, action: { payload: number }) {
            const productId = action.payload;
            state.items = state.items.filter(item => item.productId !== productId);
        }
    },
});

const selectCartItems = (state: RootState) => state.cart.items;
const selectProducts = (state: RootState) => state.products.items;

export const selectTotalPrice = createSelector(
    [selectCartItems, selectProducts],
    (cartItems, products) => {
        return cartItems.reduce((total, cartItem) => {
            const product = products.find(p => p.id === cartItem.productId);
            if(!product) return total;
            return total + product.price * cartItem.quantity;
        }, 0);
    }
)

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;