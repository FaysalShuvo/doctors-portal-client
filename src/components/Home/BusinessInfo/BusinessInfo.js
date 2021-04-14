import React from "react";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import InfoCard from "../../InfoCard/InfoCard";
const infoData = [
  {
    title: "Opening Hours",
    description: "We are open 7 days",
    icon: faClock,
    background: "primary",
  },
  {
    title: "Visit Our Location",
    description: "Brooklyn, NY 10003 USA",
    icon: faMapMarkerAlt,
    background: "dark",
  },
  {
    title: "Call Us Now",
    description: "+15697544212",
    icon: faPhone,
    background: "primary",
  },
];
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard key={info.title} info={info} />
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
