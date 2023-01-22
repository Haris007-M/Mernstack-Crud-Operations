import React from "react";
import {
  IoIosBusiness,
  IoIosCalculator,
  IoIosContacts,
  IoIosDesktop,
  IoIosEasel,
  IoIosFiling,
  IoIosJournal,
  IoIosLogOut,
  IoIosPeople,
  IoIosPersonAdd,
  IoIosSettings,
} from "react-icons/io";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Accounts from "../Accounts/Accounts";
import AddTransaction from "../Accounts/AddTransaction/AddTransaction";
import BalanceSheet from "../Accounts/BalanceSheet/BalanceSheet";
import Students from "../Students/Students";
import StuProjects from "../Stu_Projects/StuProjects";
import "./SideBar.css";
export default function SideBar() {
  function w3_open() {
    document.getElementById("main").style.marginLeft = "15%";
    document.getElementById("mySidebar").style.width = "15%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
  }
  function w3_close() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.width = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "block";
    // document.getElementsByClassName("w3-bar-item").style.display="none";
  }
  return (
    <>
      <BrowserRouter>
        <div
          className="w3-sidebar w3-bar-block w3-card w3-animate-left "
          id="mySidebar">
          <button className="w3-button w3-xlarge" onClick={w3_close}>
            &#9776;
          </button>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosDesktop className="icons" /> Dashboard
          </Link>
          <Link to="/students" className="w3-bar-item w3-button">
            <IoIosContacts className="icons" /> Students
          </Link>
          <Link to="/stuProjects" className="w3-bar-item w3-button">
            <IoIosFiling className="icons" /> Std_Projects
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosEasel className="icons" /> Std_Tasks
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosLogOut className="icons" /> Leave
          </Link>
          <Link to="/accounts" className="w3-bar-item w3-button">
            <IoIosCalculator className="icons" /> Accounts
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosPeople className="icons" /> Teachers
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosJournal className="icons" /> Knowledge_base
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosPersonAdd className="icons" /> Add_Teacher
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosBusiness className="icons" /> Universities
          </Link>
          <Link to="" className="w3-bar-item w3-button">
            <IoIosSettings className="icons" /> Setting
          </Link>
        </div>
        <div id="main">
          <div className="w3-teal">
            <button
              id="openNav"
              className="w3-button w3-teal w3-xlarge"
              onClick={w3_open}>
              &#9776;
            </button>
          </div>
          <Routes>
            <Route path="/students" element={<Students/>} />
            <Route path="/stuProjects" element={<StuProjects/>} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/balanceSheet" element={<BalanceSheet/>} />
          </Routes>
        </div>
      </BrowserRouter>
      <AddTransaction />
    </>
  );
}
