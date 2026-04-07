import ProductList from "./components/ProductList";
import { TiShoppingCart } from "react-icons/ti";


function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">Welcome to ShoppyGlobe<TiShoppingCart /></h1>

        <p className="text-lg mb-6">
          Discover amazing products at the best prices
        </p>

        <a
          href="#products"
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
        >
          Shop Now
        </a>
      </div>

      {/* PRODUCT SECTION */}
      <div id="products" className="py-10">
        <ProductList />
      </div>
    </div>
  );
}

export default Home;