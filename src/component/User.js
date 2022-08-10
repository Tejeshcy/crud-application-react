import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import UserList from "./UserList";
import CustomModal from "./CustomModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const User = () => {
  const history = useNavigate();

  const [userList, setUserList] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const[edit, setEdit] = useState(false)
  const [selectedUser, setSelectedUser] = useState({})
  
  const showEdit = (data) => {
    setEdit(true)
    setSelectedUser(data)
    
  }
  const handleDeleteModal = (data) => {
    setDeleteModal(true);
    setSelectedUser(data)
    
    
  };

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
        // console.log(res.data);
        if (res.data) {
          setUserList(res.data.data);
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  const handleModal = () => {
    setShow(true);
  };
    
  const handleDelete = (data) => {
    axios.delete("https://reqres.in/api/users/"+ data.id)

    .then(res => {
        console.log(res)
        setDeleteModal(false)
        history('/user')
        alert("User Deleted SuccessFully")
        
        
    })

    .catch(err => {
        console.log(err)
    })
  }
  

  const handleCloseModal = () => {
    setShow(false);
    setDeleteModal(false);
    setEdit(false);
  };

  return (
    <div className="">
      <Header />

      <div className="container my-2">
        <h1 className="text-center">User List</h1>
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary " onClick={handleModal}>
            {" "}
            Create New User
          </button>
        </div>
        {userList.map((data, index) => {
          return (
            <div>
              <UserList data={data} handleDeleteModal={handleDeleteModal} showEdit={showEdit}/>
            </div>
          );
        })}
      </div>
      {show && <CustomModal handleCloseModal={handleCloseModal} />}
      {deleteModal && <DeleteModal handleCloseModal={handleCloseModal} handleDelete={handleDelete} id = {selectedUser.id} />}
      {edit &&<EditModal handleCloseModal={handleCloseModal} data= {selectedUser}/>}
    </div>
  );
};

export default User;
