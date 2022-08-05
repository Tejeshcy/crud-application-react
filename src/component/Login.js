import React, { useState } from "react";
import axios from "axios";

const Login = () => {

    const[email, setEmail]= useState("");
    const[password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log(e.target.value)
    }

    const handleLogin = () => {
        console.log("HELLO");

        let data ={
            "email": email,
            "password": password
        }
        axios({
            method:"POST",
            url:"https://reqres.in/api/login",
            data:data
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return(
        <div className="conatiner-fluid login-container">
            <div className="row justify-content-center ">
                <div className="col-sm-6 my-4 ">
                    <div className="card innercolor">
                        <div className="card-body" >
                            <h3 className="text-center my-3 ">Login</h3>
                            <input className="form-control my-3" placeholder="Enter Your Email" onChange={(e)=> handleEmail(e)}></input>
                            <input type ="password" className="form-control " placeholder="Enter Your Password" onChange={(e) => handlePassword(e)}></input>
                            <div className="">
                                <button className="submitButton" onClick={handleLogin}>Submit</button>
                           
                            </div>
                            <div>
                            <p className="text-center">Don't have an account? Kindly SignUp<br></br><button className="btn btn-warning mt-2">SignUp</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;