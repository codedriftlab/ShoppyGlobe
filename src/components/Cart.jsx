import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col">
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Cart is empty</p>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}

          {/* Total + Checkout */}
          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">
              Total: ₹{totalPrice}
            </h3>

            <button
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
}

export default Cart;