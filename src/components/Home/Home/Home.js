import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import FeatureService from "../FeatureService/FeatureService";
import Header from "../Header/Header";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="">
      <Header />
      <Services />
      <FeatureService />
      <MakeAppointment />
      <Testimonials />
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
