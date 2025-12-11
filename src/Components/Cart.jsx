import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "../Styles/Cart.css";

function Cart() {
  const { cartItems, plusQty, minusQty, removeCart, isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePlaceOrder = (item) => {
    if (!isLoggedIn) {
      alert("Please Sign In or Sign Up !!");
      navigate("/signin", { state: { fromCart: true } });
    } else {
      navigate("/orderoptions", { state: { item: item } });
    }
  };

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>

            <div className="qty-box">
              <button onClick={() => minusQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => plusQty(item.id)}>+</button>
            </div>

            <div className="cart-buttons">
              <button onClick={() => handlePlaceOrder(item)}>Place Order</button>
              <button onClick={() => removeCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
