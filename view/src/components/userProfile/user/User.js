import React from "react";
import { useSelector } from "react-redux";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";

import "./user.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function User() {

const data=useSelector(state=>state.auth)
// console.log(data)
const{user}=data
const[username,Setusername] =useState(user.name+'99');
const[name,Setname] =useState(user.name);
const[email,Setemail] =useState(user.email);
const[phone,Setphone] =useState(user.phone);
const[address,Setaddress] =useState('Dhaka');
const[status,setStatus]=useState('')


const userupdate=async()=>{

  try{
   const config={
     headers:{
      "Content-Type": "application/json",
     }
   }
 
   const {data}=await axios.put(`http://localhost:5000/userProfile/${user._id.$oid}`,{
    name,
    email,
    phone

   },config);
   // console.log(data);
   // console.log(data.status)
   // localStorage.setItem('userinfo',JSON.stringify(data))
 
   setStatus(200);
 
   // window.alert("Registration Success");
   // navigate(`/RestaurantMenu/${items.foodRestId}`);
   window.location.reload();
  
 }catch(err){
   console.log(err)
   // setStatus(err.response.status)
   // setError(err.response.data)
 }
}



  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
        
            <div className="userShowTopTitle">
              <span className="userShowUsername" ><h4>{username}</h4></span>
             
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{username}99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">31.08.1998</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">{phone}</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{email}</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">{address}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" onSubmit={userupdate} id="userupdate">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder={name}
                  className="userUpdateInput"
                  value={name}
              onChange={(e)=>Setname(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={email}
                  className="userUpdateInput"
                  value={email}
              onChange={(e)=>Setemail(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder={phone}
                  className="userUpdateInput"
                  value={phone}
              onChange={(e)=>Setphone(e.target.value)}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={address}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
