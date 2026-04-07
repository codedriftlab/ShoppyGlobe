import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  // safety check
  if (!product) return null;

  return (
    <div className="bg-white rounded-xl shadow p-4">

      <Link to={`/products/${product.id}`}>
  <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>

</Link>

      <p>₹{product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>

    </div>
  );
}

export default ProductItem;