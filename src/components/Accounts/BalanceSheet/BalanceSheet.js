import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BalanceSheet.css";
export default function BalanceSheet() {
  const [data, setData] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState("25");

  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const currentData = data.slice(0, rowsPerPage);

  useEffect(() => {
    axios
      .get("http://localhost:8003/accounts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error + "this is not working");
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Balance sheet</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 d-flex mt-3">
            <h6>Show Rows</h6>
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={25}
                checked={rowsPerPage === 25}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                25
              </label>
            </div>
            <div className="form-check ">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                value={50}
                checked={rowsPerPage === 50}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                50
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">PayOperation</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item._id}>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.payOperation}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
