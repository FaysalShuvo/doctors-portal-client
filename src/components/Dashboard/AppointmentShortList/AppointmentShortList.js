import React from "react";

const AppointmentShortList = ({ appointments }) => {
  return (
    <>
      <table className="table shadow-sm mt-4">
        <thead>
          <tr>
            <th className="text-secondary" scope="col">#</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{app.name}</td>
              <td>{app.phone}</td>
              <td>{app.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AppointmentShortList;
