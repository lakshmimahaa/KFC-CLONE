import { useContext, useState } from "react";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import "../Styles/Signin.css";
import { AppContext } from "../Context/AppContext";

function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const fromCart = location.state?.fromCart || false;

  const usersurl = "https://kfcjson-1.onrender.com";

  const handleSignin = () => {
    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    axios
      .get(usersurl)
      .then((resp) => {
        const users = resp.data;

        const foundUser = users.find((user) =>
          bcrypt.compareSync(phoneNumber, user.number)
        );

        if (!foundUser) {
          setError("Account not found Please Sign Up");
          return;
        }

        setError("");
        setIsLoggedIn(true);
        alert("Signin Successfully !!");

        if (fromCart) {
          navigate(-1);
        } else {
          navigate("/signout"); 
        }
      })
      .catch(() => {
        setError("Server error occurred");
      });
  };

  if (isLoggedIn) {
    return fromCart ? <Navigate to="/cart" replace /> : <Navigate to="/signout" replace />;
  }

  return (
    <div className="signin-container">
      <h3 className="heading">
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">/Sign Up</Link>
      </h3>

      <img src="/kfcletter.png" alt="letter" className="letter-img" />

      <h1 className="title">
        Let’s Sign In or Create account with your phone number!
      </h1>

      <div className="input-wrapper">
        <input
          type="number"
          value={phoneNumber}
          placeholder="Phone Number"
          className={error ? "error-input" : ""}
          onChange={(e) => {
            const value = e.target.value;
            setPhoneNumber(value);

            if (value.length < 10) {
              setError("Phone number must be 10 digits");
            } else {
              setError("");
            }
          }}
        />

        {error && <span className="error-text">{error}</span>}
      </div>

      <p className="terms">
        By “logging in to KFC”, you agree to our Privacy Policy and Terms &
        Conditions.
      </p>

      <button className="signin-btn" onClick={handleSignin}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
