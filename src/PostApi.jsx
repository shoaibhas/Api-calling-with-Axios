import React, { useState } from "react";
import axiosInstance from "./Axios";
import './PostApi.css'
const PostApi = () => {
  const data = { firstName: "", lastName: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post("/userlogin/register", inputData).then((response) => {
      console.log(response);
    });
  };
  return (
    <>
      <label htmlFor="">firstName:</label>
      <input
        type="text"
        name="firstName"
        value={inputData.firstName}
        onChange={handleData}
      ></input>
      <br />
      <label htmlFor="">lastName:</label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleData}
      ></input>
      <br />
      <label htmlFor="">email:</label>
      <input
        type="text"
        name="email"
        value={inputData.email}
        onChange={handleData}
      ></input>
      <br />
      <label htmlFor="">password:</label>
      <input
        type="text"
        name="password"
        value={inputData.password}
        onChange={handleData}
      ></input>
      <br />
      <button onClick={handleSubmit}>Add</button>
    </>
  );
};

export default PostApi;
