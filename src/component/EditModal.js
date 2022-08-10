import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditModal = ({handleCloseModal, data}) => {

    const[name, setName] = useState()
    const[job,setJob] = useState()
    

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleJob = (e) =>{
        setJob(e.target.value)
    }

    const handleSave = () => {
        let user_data ={
            "name": name,
            "job": job
        }
        axios({
            method: "PUT",
            url : "https://reqres.in/api/users/" + data.id,
            user_data : data
        })
        .then(res=>{
            alert("User Updated Successfully")
            console.log(res)
            handleCloseModal()
        })
        .catch(err =>{
            console.log(err)
        })

    }

    useEffect(()=> {
        // console.log(data)
        let name = data.first_name + " " + data.last_name
        setName(name)
        let job = data.job
        setJob(job)

    },[])

    // console.log(data)

  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control my-3"
              placeholder="Enter Your Name"
              onChange={(e) => handleName(e)}
              value={name}
            />
            <input
              className="form-control my-3"
              placeholder="Enter Your Job"
              onChange={(e) => handleJob(e)}
              value={job}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
