import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

// https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/
const LoanManage = () => {
  // States for registration
  const { loginStatus, setLoginStatus } = useContext(AuthContext);
  const [loanAmount, setLoanAmount] = useState("");
  const [numInstallments, setNumInstallments] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the loanAmount change
  const handleLoanAmount = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setLoanAmount(amount);
    }
    setSubmitted(false);
  };

  // Handling the numInstallments change
  const handleNumInstallments = (e) => {
    setNumInstallments(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount === "" || numInstallments === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      // Create new user
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          loan_amount: loanAmount,
          num_installments: numInstallments,
        }),
      };
      // fetch("http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/...", requestOptions);  TODO: update this api call
      // .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));
      console.log("Submitting loan application!");
    }
  };

  // Showing success message
  const successMessage = () => {
    const username = localStorage.getItem("username");

    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {username} successfully submitted a loan application!!</h1>
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
    <div className="loanmanage">
      <div>
        <h1>User Registration</h1>
      </div>
      {loginStatus === "true" ? (
        <div>
          {/* Calling to the methods */}
          <div className="messages">
            {errorMessage()}
            {successMessage()}
          </div>

          <form>
            {/* Labels and inputs for form data */}
            <label className="label">Loan Amount ($)</label>
            <input
              onChange={handleLoanAmount}
              className="input"
              value={loanAmount}
              type="text"
            />

            <label className="label">Number of Installments</label>
            <input
              onChange={handleNumInstallments}
              className="input"
              value={numInstallments}
              type="number"
              pattern="[0-9]*"
              min={1}
            />

            <button onClick={handleSubmit} className="btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <h4>Please login to manage loans!</h4>
      )}
    </div>
  );
};

export default LoanManage;
