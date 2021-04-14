import React from "react";
import "./Blogs.css";
import wilson from "../../../images/wilson.png";
import Blog from "../Blog/Blog";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
];
const Blogs = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="text-primary">OUR BLOG</h5>
          <h1 style={{ color: "#41495C" }}>From Our Blog News</h1>
        </div>
        <div className="card-deck my-5 d-flex justify-content-around">
          {blogData.map((blog) => (
            <Blog blog={blog} key={blog.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
