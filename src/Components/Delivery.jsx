import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Selectionbox.css';
import { AppContext } from '../Context/AppContext';

function Delivery() {
  const [delivery, setDelivery] = useState("");
  const {handleBack} = useContext(AppContext)
  const navigate=useNavigate('')

  return (
    <div className="selection-container">

      <div className="selection-content">

        <button className='selection-arrow' onClick={(handleBack)}>←</button>

        <h1 className="selection-head">DELIVERY ADDRESS</h1>

        <div className="selection-divider"></div>

        <p className="selection-subtitle">
          Already a member?
          <Link to="/signin" className="auth-link"> Sign in </Link> /
          <Link to="/signup" className="auth-link"> Sign up </Link>
        </p>

        <div className="selection-box">
          <input
            className="select-input"
            type="text"
            value={delivery}
            placeholder="Search for area, street name..."
            onChange={(e) => setDelivery(e.target.value)}
          />

          <button className="confirm-button" 
            onClick={()=> {
              if (delivery.trim() === "") {
              alert("Please enter your delivery location!");
             return;
           }  navigate('/payment')}}>Confirm</button>
        </div>

      </div>

    </div>
  );
}

export default Delivery;
