import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const history = useNavigate();

  // useEffect(() => {
  //     const token = window.localStorage.getItem("token")
  //     if (token == null){
  //         alert("Please Login to continue")
  //         history("/login")
  //     }

  // },[])

  return (
    <div>
      <Header />
      <h1 className="text-center my-3 ">HomePage</h1>

      <div className="container">
        <div className="card-body text-center bg-info body p-5">
          <h2> Hello, Welcome.</h2>
          <p>
            This Webpage is designed to learn CRUD application. Where a user can
            create, read or retrive, update and delete.
          </p>

          <p>
            Kindly use the below Login and signUp credentials to view , create,
            update and Delete users.
          </p>

          <h3> SignUp credentials</h3>
          <p>"email": "eve.holt@reqres.in", "password": "pistol"</p>

          <h3> Login credentials</h3>
          <p>"email": "eve.holt@reqres.in", "password": "cityslicka"</p>

          </div>
      </div>

          <div className="container my-5">
            <div className="card-body text-center bg-info body p-3">
              
              <p>I would really appreciate the feedback. Kindly mail to tejeshcy@gmail.com if you have any.</p>
              <p>Thank you for Visiting </p>
            </div>
          </div>
       
    </div>
  );
};

export default Home;
