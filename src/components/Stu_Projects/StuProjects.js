import React, { useState, useEffect } from "react";
import AddProject from "./AddProject/AddProject";
import "./StuProjects.css";
import axios from "axios";
import UpdateForm from "./Updateform/UpdateForm";
export default function StuProjects() {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(-1);
  const [rowsPerPage, setRowsPerPage] = useState("25");

  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const currentData = data.slice(0, rowsPerPage);
  //----------get data from database------------------------------------------------------------
  useEffect(() => {
    axios
      .get("http://localhost:8001/stuProjects")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error + "this is not working");
      });
  }, []);

  // for deletion the record--------------------------------------------------------------------
  const handleClick = async (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8001/stuProjects/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
      });
    const items = await axios.get("http://localhost:8001/stuProjects");
    setData(items.data);
  };
  //for updation data ----------------------------------------------------------------------------
  const handleEdit = (id) => {
    setUpdate(id);
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-sm-12 d-flex mt-3">
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
          <div className="col-8">
            {/* <!-- Button trigger modal --> */}
            <button
              id="btnintern"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                </svg>{" "}
                Projects
              </span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Start_date</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Days</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) =>
                  update === item._id ? (
                    <UpdateForm
                      item={item}
                      currentData={currentData}
                      setData={setData}
                    />
                  ) : (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.title}</td>
                      <td>{item.startDate}</td>
                      <td>{item.duration}</td>
                      <td>{item.day}</td>
                      <td>{item.status}</td>
                      <td>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Action
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button
                                onClick={() => handleEdit(item._id)}
                                className="dropdown-item">
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleClick(item._id)}
                                className="dropdown-item ">
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddProject setData={setData} />
    </>
  );
}
