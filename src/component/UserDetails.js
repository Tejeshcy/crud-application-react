import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const UserDetail = () => {
  const history = useNavigate();

  const params = useParams();
//   console.log(params);
  const user_id = params.id;

  const [userDetail, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    axios
      .get("https://reqres.in/api/users/" + user_id)

      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          setUserDetails(res.data.data);
        }
      })

      .catch((err) => {
        console.log(err.data);
        alert('User Not Found')
      });
  };
//   console.log(userDetail);
  return (
    <div>
      <Header />
      <div className="container my-3">
        <div className="card w-50 mx-auto bg-primary">
          <div className="card-body text-center">
            <h3> User Details</h3>
            
            <img src={userDetail.avatar} className="my-2" />
            <div><strong>User Id : </strong> {userDetail.id}</div>
            <div><strong>Name : </strong>{userDetail.first_name +" " + userDetail.last_name}</div>
            <div><strong>Email : </strong>{userDetail.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
