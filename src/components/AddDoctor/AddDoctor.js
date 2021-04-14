import React, { useState } from "react";
import SideBar from "../Dashboard/SideBar/SideBar";

const AddDoctor = () => {
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", info.name);
    formData.append("email", info.email);

    console.log(formData);
    fetch("https://secure-retreat-39795.herokuapp.com/addDoctor", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10 pt-5 p-5">
          <h4 className="text-brand">Add Doctor</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">name</label>
              <input
                onBlur={handleBlur}
                type="text"
                name="name"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload you Image</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-brand text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
