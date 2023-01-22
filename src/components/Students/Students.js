import axios from "axios";
import React, { useEffect, useState } from "react";
import AddInternee from "./AddInternee/AddInternee";
import Image from "./Img/Image";
import ProfilePic from "./ProfilePic/ProfilePic";
import "./Students.css";
import UpdateForm from "./Updateform/UpdateForm";

export default function Students() {
  const [internee, setInterneeData] = useState([]);
  const [update, setUpdate] = useState(-1);
  const [rowsPerPage, setRowsPerPage] = useState("25");

  const handleChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const currentData = internee.slice(0, rowsPerPage);
  //-------get data from database--------------------------------------------------------
  useEffect(() => {
    axios
      .get("http://localhost:8002/students")
      .then((res) => {
        setInterneeData(res.data);
      })
      .catch((error) => {
        console.log(error + "this is not working");
      });
  }, []);
  // for deletion the record--------------------------------------------------------------------
  const handleClick = async (e) => {
    console.log(e);
    axios
      .delete(`http://localhost:8002/students/${e}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
      });
    const items = await axios.get("http://localhost:8002/students");
    setInterneeData(items.data);
  };
  //for updation data ----------------------------------------------------------------------------
  const handleEdit = (id) => {
    console.log(id);
    setUpdate(id);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 my-4">
            <ProfilePic />
          </div>
        </div>
        <div className="row">
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
          <div className="col-8 mb-3">
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
                Interns
              </span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-8 col-sm-6">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Internee no</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Email</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Join Date</th>
                  <th scope="col">Technology</th>
                  <th scope="col">Attendance</th>
                  <th scope="col">Projects</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) =>
                  update === item._id ? (
                    <UpdateForm
                      item={item}
                      currentData={currentData}
                      setInterneeData={setInterneeData}
                    />
                  ) : (
                    <tr key={item._id}>
                      <td>{item.interneeNo}</td>
                      <td>{item.name}</td>
                      <td>
                        <Image name={item.image} />
                      </td>
                      <td>{item.email}</td>
                      <td>{item.duration}</td>
                      <td>{item.joinDate}</td>
                      <td>{item.technology}</td>
                      <td>{item.attendance}</td>
                      <td>{item.project}</td>
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
      <AddInternee />
    </>
  );
}
