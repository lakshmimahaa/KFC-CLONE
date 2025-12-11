import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import '../Styles/Navigate.css';

function Navigate() {
  const { cartItems } = useContext(AppContext);

  return (
    <div className="navigate-container">

      <div className="section1">
        <div className="logo">
        <Link to="/homepage"> <img src='/kfcletter.png' alt="kdclogo" className="logo-img"/> </Link>
        </div>

        <div className="links">
          <Link to="/menu">Menu</Link>
          <Link to="/deals">Deals</Link>
          <Link to="/orders">Orders</Link>
        </div>

        <div className="signin-logo">
          <i><Link to="/signin"><FaCircleUser/></Link></i>
          <Link to="/signin">Sign In</Link>

          <Link to="/cart" className="cart-link">
            <img src='/cart.jpg' alt="cart" className="cart-img"/>
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </Link>
        </div>
      </div>

    
      <div className="section2">
        <div className="slide-track">
          <p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p>
          <p>50% OFF! DOUBLE THE CHICKEN, HALF THE PRICE!</p>
          <p>HALF PRICE. FULL HAPPINES.</p>
          <p>50% OFF — GRAB IT BEFORE It’s GONE!</p>
        </div>
      </div>

    </div>
  );
}

export default Navigate;
