import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";


const Home = () => {

    const history= useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token == null){
            alert("Please Login to continue")
            history("/login")
        }

    },[history])

    return(
        <div>
            <Header/>
            <h1 className="text-center my-3">This is HomePage</h1>
        </div>
    )
}

export default Home;