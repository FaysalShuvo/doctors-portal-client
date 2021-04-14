import React from "react";
import img from "../../../images/doctor-sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Doctor = ({ doctor }) => {
  console.log(doctor);
  return (
    <div className="col-md-4 text-center">
      {/* <img
        className="img-fluid mb-3"
        src={`https://secure-retreat-39795.herokuapp.com/${doctor.image.img}`}
        alt=""
      /> */}
      <img
        style={{ height: "100px" }}
        src={`data:image/jpeg;base64,${doctor.image.img}`}
        alt="doctor"
      />
      <h4>{doctor.name}</h4>
      <p>
        <FontAwesomeIcon className="text-brand" icon={faEnvelope} />{" "}
        {doctor.email}
      </p>
    </div>
  );
};

export default Doctor;
