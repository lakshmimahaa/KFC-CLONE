import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bcrypt from "bcryptjs";
import "../Styles/Signup.css";

function Signup() {
  const [signup, setSignup] = useState([]);
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [error, setError] = useState("");

  const usersurl = "https://kfcjson-1.onrender.com/users";
  const navigate = useNavigate();

  const handleSignup = () => {

    if (userNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    handleUser({
      id: `${+new Date()}`,
      name: userName,
      email: userMail,
      number: userNumber,
    });
  };

  useEffect(() => {
    axios
      .get(usersurl)
      .then((resp) => setSignup(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const handleUser = (postUser) => {
    const hashedNumber = bcrypt.hashSync(postUser.number, 10);

    const userWithHash = { ...postUser, number: hashedNumber };

    axios
      .post(usersurl, userWithHash)
      .then(() => {
        alert("Signup Successfully !!");
        navigate("/signin");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="signup-container">
      <h3 className="head">Sign Up</h3>

      <input
        type="text"
        value={userName}
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
      />

      <input
        type="text"
        value={userMail}
        placeholder="Enter your mail"
        onChange={(e) => setUserMail(e.target.value)}
      />

      <input
        type="number"
        value={userNumber}
        placeholder="Enter your number"
        className={error ? "error-input" : ""}
        onChange={(e) => {
          const value = e.target.value;
          setUserNumber(value);

          if (value.length < 10) {
            setError("Phone number must be 10 digits");
          } else {
            setError("");
          }
        }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="signup-btn" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
