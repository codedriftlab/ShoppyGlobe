import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-96">
        <img src={product.thumbnail} alt={product.title} />
        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold mt-2">₹{product.price}</p>
        <div className="mb-4">
  <h3 className="font-semibold mb-2">Specifications:</h3>

  {product.specs &&
    Object.entries(product.specs).map(([key, value]) => (
      <p key={key} className="text-gray-700">
        <span className="font-medium capitalize">{key}:</span> {value}
      </p>
    ))}
</div>
      </div>
    </div>
  );
}

export default ProductDetails;