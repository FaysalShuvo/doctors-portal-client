import React from "react";
import feature from "../../../images/feature.png";

const FeatureService = () => {
  return (
    <section className="my-5">
      <div className="container mb-5">
        <div className="row ">
          <div className="col-md-5 p-5">
            <img className="img-fluid" src={feature} alt="feature" />
          </div>
          <div className="col-md-7 align-self-center mb-3 pe-5">
            <h2 style={{ color: "#41495C" }}>
              Exceptional Dental <br /> Care, on Your Terms
            </h2>
            <p className="text-secondary mb-4 mt-4 pe-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
              incidunt similique magnam architecto nulla, accusantium nisi
              voluptates veniam rem labore deleniti assumenda expedita, quos
              quia error laudantium doloremque, aperiam sed Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Molestiae eveniet vitae a,
              veniet vitae a, exercitationem tenetur dolores totam doloribus
              reiciendis assumenda vero! Quos sit nobis vitae possimus eius
              doloremque ab deleniti sapiente!
            </p>
            <button className="btn text-white  btn-brand mt-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureService;
