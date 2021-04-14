import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faGripHorizontal,
  faUsers,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserContext } from "../../../App";

const SideBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor, setIsDoctor] = useState(false);

  useEffect(() => {
    fetch("https://secure-retreat-39795.herokuapp.com/isDoctor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsDoctor(data);
      });
  }, []);

  return (
    <div>
      <div
        className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
        style={{ height: "100vh" }}
      >
        <ul className="list-unstyled">
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/doctor/dashboard"
              className="text-white "
            >
              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
            </Link>
          </li>
          {isDoctor && (
            <div>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/dashboard/appointment"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/doctor/patients"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/doctor/prescriptions"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faFileAlt} />{" "}
                  <span>Prescriptions</span>
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/add-doctor"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctor</span>
                </Link>
              </li>

              <li>
                <Link
                  style={{ textDecoration: "none" }}
                  to="/doctor/setting"
                  className="text-white"
                >
                  <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                </Link>
              </li>
            </div>
          )}
        </ul>
        <div>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            className="text-white"
          >
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
