import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import './GetApi.css'
import axiosInstance from "./Axios";
function GetApi() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/userlogin");
        console.log(res.data);
        setUserData(res.data); // Assuming res.data contains userData object
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  // const getmethod = ({userData}) => {
  return (
    <div className="container">
      <h1>User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if userData.user1 is an array before mapping */}
          {userData.user1 ? (
            userData.user1.map((user) => (
              <tr key={user.id}>
                {/* Display user details */}
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
// }
export default GetApi;
