import { useState } from "react";
// import CartPage from "./components/CartPages";
import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-gray-900">E-Commerce Store</h1>
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            {showCart ? "Back to Products" : "View Cart"}
          </button>
        </div>
      </header>
      <main>
        <CartSummary />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
