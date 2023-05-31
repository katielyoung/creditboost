import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./AuthContext";

// https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
const Login = () => {
  // States for registration
  const { loginStatus, setLoginStatus } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      // Verify user is in the database
      const url = `http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/users/${email}`
      // fetch("http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/users", requestOptions);
      // .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));

      setLoginStatus("true");
      console.log("Logging in!");

      
      // Set user (userId) from POST
      const userId = 2; // temporary until backend returns id
      localStorage.setItem("user", userId);

      // Route change to home
      navigate("/");

    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User successfully logged in!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <div className="regform">
      <div>
        <h1>User Login</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
