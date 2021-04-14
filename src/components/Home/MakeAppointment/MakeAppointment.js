import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";
const MakeAppointment = () => {
  return (
    <section className="make-appointment">
      <div className="container">
        <div className="row">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="doctor" />
          </div>
          <div className="col-md-7 text-white py-5 make-appointment-txt">
            <h5 style={{ color: "#1CC7C1" }}>APPOINTMENT</h5>
            <h2 className="my-4">
              Make an appointment <br /> Today
            </h2>
            <p className="my-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
            </p>
            <button className="btn text-white  btn-brand p-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
