import React, { useState } from "react";
import axios from "axios";

const CustomModal = ({handleCloseModal}) => {

    const [name, setName] = useState("")
    const [job, setJob] = useState("")


    const handleName = (e) => {
         setName(e.target.value)
    }

    const handleJob = (e) => {
        setJob(e.target.value)
   }

   const handleSave = () => {
       let data ={
        "name": name,
        "job": job
       }
       axios({
        method:"POST",
        url:"https://reqres.in/api/users",
        data:data
       })
       .then(res => {
        console.log(res)
        handleCloseModal();
       })
       .catch(err => {
        console.log(err)
       })
   }
  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <input className="form-control my-3" placeholder="Enter Your Name" onChange={(e)=> handleName(e)} />
            <input className="form-control my-3" placeholder="Enter Your Job" onChange={(e)=> handleJob(e)}/>
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
            <button type="button" className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
