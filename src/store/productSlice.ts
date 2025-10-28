import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../types";

const mockProducts: Product[] = [
  { id: 1, name: "Laptop", price: 999, description: "A powerful laptop" },
  { id: 2, name: "Mouse", price: 25, description: "Ergonomic wireless mouse" },
  { id: 3, name: "Keyboard", price: 75, description: "Mechanical keyboard" },
];

interface ProductsState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductsState = {
  items: mockProducts,
  status: "succeeded",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
