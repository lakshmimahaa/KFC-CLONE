import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import "../Styles/Signout.css";

function Signout() {
  const { setIsLoggedIn ,handleBack} = useContext(AppContext);
  const navigate = useNavigate();

  
  const handleSignout = () => {
    setIsLoggedIn(false); 
    navigate("/"); 
  };


  return (
    <div className="signout-container">
      <div>
        <button className="signoutclose-btn" onClick={handleBack}>✕</button>  
        <h1>Welcome!</h1>
        <p>You are signed in. Click below to Sign Out.</p>
        <button className="signout-btn" onClick={handleSignout}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Signout;
