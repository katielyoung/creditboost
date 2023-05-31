import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  // States for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [ssn, setSsn] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [bankRouting, setBankRouting] = useState("");
  const [bankName, setBankName] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  const handleDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
    setSubmitted(false);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  // https://tomduffytech.com/how-to-format-ssn-in-javascript/
  function formatSsn(value) {
    // if input value is falsy eg if the user deletes the input, then just return
    if (!value) return value;

    // clean the input for any non-digit values.
    const ssn = value.replace(/[^\d]/g, "");

    // ssnLength is used to know when to apply our formatting for the ssn
    const ssnLength = ssn.length;

    // we need to return the value with no formatting if its less than four digits
    if (ssnLength < 4) return ssn;

    // if ssnLength is greater than 4 and less the 6 we start to return
    // the formatted number
    if (ssnLength < 6) {
      return `${ssn.slice(0, 3)}-${ssn.slice(3)}`;
    }

    // finally, if the ssnLength is greater then 6, we add the last
    // bit of formatting and return it.
    return `${ssn.slice(0, 3)}-${ssn.slice(3, 5)}-${ssn.slice(5, 8)}`;
  }

  function ssnFormatter() {
    // grab the value of what the user is typing into the input
    const inputField = document.getElementById("ssn");
    // next, we're going to format this input with the `formatSsn` function, which we'll write next.
    const formatedValue = formatSsn(inputField.value);
    // Then we'll set the value of the inputField to the formattedValue we generated with the formatSsn function
    inputField.value = formatedValue;
  }
  // https://tomduffytech.com/how-to-format-ssn-in-javascript/

  const handleSsn = (e) => {
    setSsn(e.target.value);
    setSubmitted(false);
  };

  const handleBankAccount = (e) => {
    const numStr = e.target.value;
    const numInt = parseInt(numStr, 10);
    setBankAccount(numInt);
    setSubmitted(false);
  };

  const handleBankRouting = (e) => {
    const numStr = e.target.value;
    const numInt = parseInt(numStr, 10);
    setBankRouting(numInt);
    setSubmitted(false);
  };

  const handleBankName = (e) => {
    setBankName(e.target.value);
    setSubmitted(false);
  };

  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      dateOfBirth === "" ||
      phone === "" ||
      ssn === "" ||
      bankAccount === "" ||
      bankRouting === "" ||
      bankName === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);

      // Get user Id
      const userId = localStorage.getItem('user') // TEMPORARY
      console.log(userId);
  
      // Create new profile
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          idUser :  userId,
          first_name :  firstName,
          last_name :  lastName,
          date_of_birth :  dateOfBirth,
          phone :  phone,
          ssn :  ssn,
          ssn_last_four_digits : ssn.slice(-4),
          bank_account : bankAccount,
          bank_routing : bankRouting,
          bank_name : bankName,
          curr_credit_score : 600,
          total_num_open_loan : 0
        }),
      };
      console.log(requestOptions)
      // fetch("http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/profiles", requestOptions);
      // .then((response) => response.json())
      // .then((data) => this.setState({ postId: data.id }));
      console.log("Submitting profile!");

      // Navigate to created profile!
      navigate("/login")
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
        <h1>
          User {firstName} {lastName} successfully registered!!
        </h1>
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
    <div className="create-profile-form">
      <div>
        <h1>Create Profile</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">First Name</label>
        <input
          onChange={handleFirstName}
          className="input"
          value={firstName}
          type="text"
        />

        <label className="label">Last Name</label>
        <input
          onChange={handleLastName}
          className="input"
          value={lastName}
          type="text"
        />

        <label className="label">Date of Birth</label>
        <input
          onChange={handleDateOfBirth}
          className="input"
          value={dateOfBirth}
          type="date"
        />

        <label className="label">
          Phone Number (No backets, spaces, or dashes)
        </label>
        <input
          maxLength={10}
          onChange={handlePhone}
          className="input"
          value={phone}
          type="text"
        />

        <label className="label">SSN</label>
        <input
          id="ssn"
          maxLength={11}
          onKeyDown={ssnFormatter}
          onChange={handleSsn}
          className="input"
          value={ssn}
          type="text"
        />

        <label className="label">Bank Account Number</label>
        <input
          maxLength={18}
          onChange={handleBankAccount}
          className="input"
          value={bankAccount}
          type="text"
        />

        <label className="label">Bank Routing Number</label>
        <input
          maxLength={9}
          onChange={handleBankRouting}
          className="input"
          value={bankRouting}
          type="text"
        />
        
        <label className="label">Bank Name</label>
        <input
          onChange={handleBankName}
          className="input"
          value={bankName}
          type="text"
        />

        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateProfile;