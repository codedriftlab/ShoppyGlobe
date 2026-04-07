import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";

function Checkout() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Order placed successfully!");
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-10">No items to checkout</h2>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {cartItems.map(item => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title} (x{item.quantity})</span>
          <span>₹{item.price * item.quantity}</span>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-4">
        Total: ₹{totalPrice}
      </h3>

      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        onClick={handleCheckout}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;