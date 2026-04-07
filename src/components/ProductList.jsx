import products from "../data/products";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const search = useSelector(state => state.cart.search);

  const filteredProducts = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Products
      </h2>
      
      <div className="grid gap-6 grid-cols-4 place-items-center max-w-6xl mx-auto">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;