import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <img style={{ height: "50px" }} src={service.img} alt={service.name} />
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        tempore, non, explicabo doloribus quam quas eius autem optio, commodi
        quae accusantium? Omnis necessitatibus quidem possimus maxime. Sunt
        cumque asperiores ad?
      </p>
    </div>
  );
};

export default ServiceDetail;
