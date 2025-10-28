import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {removeItem, increaseQuantity, decreaseQuantity } from "../store/cartSlice";
import {  selectTotalQuantity, selectTotalPrice } from "../store/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.items);
  const totalItems = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

  const getProductById = (id: number) => products.find(p => p.id === id);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mt-2">Add some products to get started</p>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Shopping Cart</h2>

      <div className="bg-indigo-50 p-4 rounded-lg mb-6 flex justify-between items-center">
        <span className="font-medium text-gray-700">
          {totalItems} item{totalItems !== 1 ? "s" : ""} in cart
        </span>
        <span className="text-xl font-bold text-indigo-700">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="space-y-4">
        {cartItems.map((cartItem) => {
          const product = getProductById(cartItem.productId);

          if (!product) return null;

          return (
            <div
              key={cartItem.productId}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{product.name}</h3>
                <p className="text-gray-600">
                  ${product.price.toFixed(2)} each
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => dispatch(decreaseQuantity(cartItem.productId))}
                >
                  -
                </button>
                <span className="w-10 text-center font-medium">
                  {cartItem.quantity}
                </span>
                <button
                  onClick={() => dispatch(increaseQuantity(cartItem.productId))}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeItem(cartItem.productId))}
                className="text-rose-600 hover:text-rose-800 font-medium"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-right">
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
