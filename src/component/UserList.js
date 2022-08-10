import React from "react";
import { useNavigate } from "react-router-dom";

const UserList = ({data,handleDeleteModal,showEdit}) => {
  // console.log(data)

  const history = useNavigate();

  const handleUserDetail = () => {
    history("/user/" + data.id);
  };
  return (
    <div className="bg-info d-flex justify-content-between p-3 my-3 list">
      <div>
        {" "}
        <strong>{data.id}</strong>
      </div>
      <div className="profileImg">
        <img className="profileImg" src={data.avatar}></img>
      </div>

      <div onClick={handleUserDetail}>
        {" "}
        <strong className="name">
          {data.first_name + " " + data.last_name}
        </strong>
      </div>
      <div>
        {" "}
        <strong>{data.email}</strong>{" "}
      </div>
      <div>
        <img
          className="editIcon"
          onClick={()=> showEdit(data)}
          src="https://cdn-icons-png.flaticon.com/512/181/181540.png"
        />
        <img
          onClick={()=>handleDeleteModal(data)}
          className="deleteIcon"
          
          src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1660054049~hmac=1d8e62db8e88d783f96638cb438d5dca"
        
        />
        

      </div>
    </div>
  );
};

export default UserList;
