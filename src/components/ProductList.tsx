// import { Product } from "../types";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.products.items);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
            <p className="text-lg font-bold text-indigo-600 mt-3">
              ${product.price}
            </p>

            <button
              onClick={() => dispatch(addItem(product.id))}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition cursor-pointer"
            >
              Add to Cart
            </button>
            <button onClick={() => dispatch(removeItem(product.id))}
                className="ml-4 mt-4 bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700 transition cursor-pointer">
                Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
