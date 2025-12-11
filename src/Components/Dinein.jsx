import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Selectionbox.css';
import { AppContext } from '../Context/AppContext';

function Dinein() {
  const [dinein, setDinein] = useState("");
  const {handleBack} = useContext(AppContext)
  const navigate=useNavigate()

  return (
    <div className="selection-container">

      <div className="selection-content">

        <button className='selection-arrow' onClick={(handleBack)}>←</button>

        <h1 className="selection-head">SELECT A KFC</h1>

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
            value={dinein}
            placeholder="Search by State, City or Zip"
            onChange={(e) => setDinein(e.target.value)}
          />

          <button className="confirm-button"
            onClick={()=> {
              if (dinein.trim() === "") {
              alert("Please enter your delivery location!");
             return;
           }  navigate('/payment')}}
          >Confirm</button>
        </div>

      </div>

    </div>
  );
}

export default Dinein;
