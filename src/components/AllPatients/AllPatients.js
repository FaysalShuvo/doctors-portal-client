import React, { useEffect, useState } from "react";
import Sidebar from "../Dashboard/SideBar/SideBar";
const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("https://secure-retreat-39795.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 pt-5 ps-5">
          <h4 className="text-brand">All Patients {appointments.length}</h4>
          <table className="table table-borderless">
            <thead>
              <tr>
                <th className="text-secondary text-left" scope="col">
                  Sr No
                </th>
                <th className="text-secondary" scope="col">
                  Name
                </th>
                <th className="text-secondary" scope="col">
                  Gender
                </th>
                <th className="text-secondary" scope="col">
                  Age
                </th>
                <th className="text-secondary" scope="col">
                  Weight
                </th>
                <th className="text-secondary" scope="col">
                  Phone
                </th>
                <th className="text-secondary" scope="col">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.gender}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.weight}KG</td>
                  <td>{appointment.phone}</td>
                  <td>{appointment.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllPatients;
