import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="bg-white p-4 mb-3">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-500 text-white px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            className="bg-green-500 text-white px-4 py-2 mt-4"
            onClick={() => navigate("/checkout")}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;