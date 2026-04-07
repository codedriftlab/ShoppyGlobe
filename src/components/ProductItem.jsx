import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  // ✅ safety check
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow p-4">
      
      <img
        src={product.thumbnail || "https://via.placeholder.com/300"}
        alt={product.title}
        className="w-full h-40 object-cover mb-3"
      />

      <Link to={`/product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>

      <p>₹{product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

    </div>
  );
}

export default ProductItem;