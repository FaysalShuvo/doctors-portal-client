import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import chair from "../../../images/chair.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: "#3A4256" }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ut
          magni, fuga asperiores maiores facilis omnis sapiente natus voluptatem
          ipsa quo veniam harum assumenda voluptas delectus dolores quam
          laboriosam exercitationem.
        </p>

        <Button
          as={Link}
          to="/appointment"
          className="btn text-white  btn-brand"
        >
          GET APPOINTMENT
        </Button>
      </div>
      <div className="col-md-6">
        <img src={chair} alt="chair" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
