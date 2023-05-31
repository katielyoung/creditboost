import { useState, useEffect, useContext } from "react";
import AuthContext from "./AuthContext";

const LoanStatus = () => {
  const dummyData = [
    {
      loan_id: 1,
      status: "SUBMITTED",
      initial_loan_amnt: 1234.25,
      num_installments: 5,
      amt_per_installment: 246.85,
      total_amt_left: 1234.25,
    },
    {
      loan_id: 2,
      status: "OPEN",
      initial_loan_amnt: 2345.2,
      num_installments: 10,
      amt_per_installment: 234.52,
      total_amt_left: 1876.16,
    },
  ];

  const { loginStatus } = useContext(AuthContext);
  const [data, setData] = useState("Loading...");
  const [gotData, setGotData] = useState(false);

  const getData = () => {
    if (loginStatus) {
      const userId = localStorage.getItem("user");
      if (userId != null) {
        const url = `http://ec2-44-203-197-80.compute-1.amazonaws.com:8080/api/loans/${userId}`;
        setGotData(true); // TEMPORARY
        // fetch(url)
        //   .then((response) => response.json())
        //   .then((json) => {
        //     setData(json);
        //     setGotData(true);
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //     setGotData(true); // TEMPORARY
        //   });
      }
    }
  };

  useEffect(() => {
    getData();
  });

  window.addEventListener("beforeunload", (event) => {
    getData();
    console.log("API call before page reload");
  });

  window.addEventListener("unload", (event) => {
    getData();
    console.log("API call after page reload");
  });

  return (
    <div className="loanstatus">
      <h1>Loan Status</h1>
      {loginStatus === "true" ? (
        <div>
          {gotData ? (
            <table>
              <thead>
                <tr>
                  <th>Loan Id</th>
                  <th>Status</th>
                  <th>Initial Loan Amount</th>
                  <th>Number of installments</th>
                  <th>Amount per installment</th>
                  <th>Total amount left</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((data, idx) => (
                  <tr key={idx}>
                    <td>{data.loan_id}</td>
                    <td>{data.status}</td>
                    <td>{data.initial_loan_amnt}</td>
                    <td>{data.num_installments}</td>
                    <td>{data.amt_per_installment}</td>
                    <td>{data.total_amt_left}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h4>Loading...</h4>
          )}
        </div>
      ) : (
        <h4>Please login to view loans!</h4>
      )}
    </div>
  );
};

export default LoanStatus;
