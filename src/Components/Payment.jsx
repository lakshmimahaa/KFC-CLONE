import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "../Styles/Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const location = useLocation();
  const singleItem = location.state?.item;
  const { addOrder } = useContext(AppContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    addOrder(singleItem, singleItem.price, singleItem.qty);
    alert("Your Order has been Placed!");
    navigate("/orders");
  };

  return (
    <div className="payment-overlay">
      <div className="payment-container">
        <h1>Payment Details</h1>
        <div className="payment-options">
          <label>
            <input
              type="radio"
              name="pay"
              value="COD"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>
          <label>
            <input
              type="radio"
              name="pay"
              value="ONLINE"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Pay Online
          </label>
        </div>
        <button onClick={handlePayment}>Confirm Order</button>
      </div>
    </div>
  );
}

export default Payment;
