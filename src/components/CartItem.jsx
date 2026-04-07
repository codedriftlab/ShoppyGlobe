import { useDispatch } from "react-redux";
import { removeFromCart, decreaseQty, increaseQty} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-4 mb-4 shadow rounded">
      
      {/* Left side */}
      <div className="flex items-center gap-4">
        <img src={item.thumbnail} alt={item.title} className="w-20" />

        <div>
          <h3 className="font-bold">{item.title}</h3>
          <p>₹{item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="flex items-center gap-3">
        <button
          className="px-2 bg-gray-300"
          onClick={() => dispatch(decreaseQty(item.id))}
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          className="px-2 bg-gray-300"
          onClick={() => dispatch(increaseQty(item.id))}
        >
          +
        </button>
      </div>

      {/* Remove button */}
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;