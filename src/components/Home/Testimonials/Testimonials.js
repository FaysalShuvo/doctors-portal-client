import React from "react";
import "./Testimonials.css";
import wilson from "../../../images/wilson.png";
import aliza from "../../../images/aliza.png";
import ema from "../../../images/ema.png";
import Testimonial from "../Testimonial/Testimonial";

const testimonialData = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Wilson Harry",
    from: "California",
    img: wilson,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Ema Gomez",
    from: "California",
    img: ema,
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
    name: "Aliza Farari",
    from: "California",
    img: aliza,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <h5 className="text-primary ">TESTIMONIAL</h5>
        <h2>
          What's Our Patients <br /> Says
        </h2>
        <div className="card-deck mt-5 d-flex justify-content-around">
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
