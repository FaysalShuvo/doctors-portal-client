import React from "react";
import AppointmentShortList from "../AppointmentShortList/AppointmentShortList";

const AppointmentsByDate = ({ appointments }) => {
  return (
    <>
      <h1 className="text-brand text-center">
        Appointments: {appointments.length}
      </h1>
      {appointments.length ? (
        <AppointmentShortList
          appointments={appointments}
          key={appointments._id}
        />
      ) : (
        <div>
          <h4 className="lead text-center mt-3">
            No Appointments for this Date
          </h4>
        </div>
      )}
    </>
  );
};

export default AppointmentsByDate;
