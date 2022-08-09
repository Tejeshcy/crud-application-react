import React from "react";


const UserList = (data) => {
    console.log(data)
    return(
        <div className="">
            
            <div className="card my-3  ">
                <div className="card-body bg-info layer">
                    <div className=" profile-container  d-flex list">
                        <div>Id : {data.data.id}</div>
                        <img className='profileImg' src={data.data.avatar}></img>
                        <div> {data.data.first_name +" " + data.data.last_name}</div>
                        <div> {data.data.email}</div>
                        

                    </div>

                </div>

            </div>

            
        </div>
    )
}

export default UserList;