import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import UserList from "./UserList";

const User = () => {
  const history = useNavigate();

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token == null) {
      alert("Please Login to continue");
      history("/login");
    }
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    axios
      .get("https://reqres.in/api/users")

      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUserList(res.data.data);
        
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <Header />
      <div className="container my-3">
        <h1 className="text-center" >User List</h1>
        {userList.map((data, index) => {
          return (
            <div>
              <UserList data = {data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default User;
