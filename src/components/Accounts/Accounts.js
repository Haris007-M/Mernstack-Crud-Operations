import React from "react";
import "./Accounts.css";
import { Link} from "react-router-dom";
const Accounts = () => {
  return (
    <>
      <div className="container">
        <center>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <div className="container">
                <div className="card_box">
                  <div className="card">
                    <div className="card-details">
                      <p className="text-title">Student_Account</p>
                      <p className="text-body">
                        Here are the details of the Std Accounts
                      </p>
                    </div>
                    <button className="card-button">Visit</button>
                  </div>
                  <span id="span1"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <div className="container">
                <div className="card_box">
                  <div className="card">
                    <div className="card-details">
                      <p className="text-title">Balance</p>
                      <p className="text-body">
                        Here are the details of the Balance record
                      </p>
                    </div>
                    <button className="card-button">Visit</button>
                  </div>
                  <span id="span2"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <div className="container">
                <div className="card_box">
                  <div className="card">
                    <div className="card-details">
                      <p className="text-title">Add_Transaction</p>
                      <p className="text-body">Add new Transactions here</p>
                    </div>
                    <button
                      className="card-button"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal">
                      Visit
                    </button>
                  </div>
                  <span id="span3"></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-4">
              <div className="container">
                <div className="card_box">
                  <div className="card">
                    <div className="card-details">
                      <p className="text-title">Balance_Sheet</p>
                      <p className="text-body">Here is the balance sheet details</p>
                    </div>
                    <Link to="/balanceSheet" className="card-button">Visit</Link>
                  </div>
                  <span id="span4"></span>
                </div>
              </div>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};

export default Accounts;
