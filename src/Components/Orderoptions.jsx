import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Orderoptions.css";

function Orderoptions() {
  const location = useLocation();
  const singleItem = location.state?.item; 
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); 
  };

  return (
    <div className="order-overlay">
      <div className="order-card">
        <button className="close-btn" onClick={handleClose}>✕</button>

        <div className="title">  <h1 className="order-title">Start Your Order</h1> </div>
        <p className="order-subtitle">HOW WOULD YOU LIKE TO RECEIVE YOUR ORDER?</p>

        <div className="order-buttons">
          <button
            className="order-btn delivery"
            onClick={() => navigate("/payment", { state: { item: singleItem } })}
          >
            Delivery
          </button>
          <button
            className="order-btn pickup"
            onClick={() => navigate("/payment", { state: { item: singleItem } })}
          >
            Pick Up
          </button>
          <button
            className="order-btn dinein"
            onClick={() => navigate("/payment", { state: { item: singleItem } })}
          >
            Dine In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Orderoptions;
