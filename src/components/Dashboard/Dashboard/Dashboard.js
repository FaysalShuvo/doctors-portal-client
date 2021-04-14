import React, { useContext } from "react";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Calendar from "react-calendar";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";

const containerStyle = {
  backgroundColor: "#f4fdfb",
  height: "100%",
};

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetch("https://secure-retreat-39795.herokuapp.com/appointmentsByDate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ date: selectedDate, email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [selectedDate]);
  return (
    <section>
      <div style={containerStyle} className="  row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-5 mt-4 p-5">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>

        <div className="col-md-5 mt-4 p-5">
          <AppointmentsByDate
            appointments={appointments}
            key={appointments._id}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
