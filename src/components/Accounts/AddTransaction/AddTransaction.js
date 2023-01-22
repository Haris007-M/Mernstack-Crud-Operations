import React, { useState } from "react";
import "./AddTransaction.css";
import axios from "axios";
export default function AddTransaction() {
  const [user, setUser] = useState({
    date: "",
    description: "",
    payOperation: "",
    amount: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const dataAdd = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8003/accounts", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    resetForm();
  };
  const resetForm = () => {
    setUser({
      date: "",
      description: "",
      payOperation: "",
      amount: "",
    });
  };
  return (
    <>
      {/* -----------------------------------------Modal Start--------------------------------------- */}
      {console.log("User", user)}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add_Transaction
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="input-group mb-4">
                      <span className="input-group-text">Date</span>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        onChange={handleChange}
                        value={user.date}
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form input-group mb-4">
                      <span className="input-group-text">Pay Operation</span>
                      <select
                        className="form-select"
                        id="select"
                        type="select"
                        name="payOperation"
                        value={user.select}
                        onChange={handleChange}
                        aria-label="Floating label select example">
                        <option disabled defaultValue=""></option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="input-group mb-4">
                      <span className="input-group-text">Description</span>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={user.description}
                        onChange={handleChange}
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="input-group mb-4">
                      <span className="input-group-text">Amount</span>
                      <input
                        type="number"
                        id="number"
                        name="amount"
                        onChange={handleChange}
                        value={user.number}
                        className="form-control"
                        aria-label="Dollar amount (with dot and two decimal places)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                onClick={dataAdd}
                className="btn btn-primary"
                data-bs-dismiss="modal">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -----------------------------------------Modal Ends--------------------------------------- */}
    </>
  );
}
