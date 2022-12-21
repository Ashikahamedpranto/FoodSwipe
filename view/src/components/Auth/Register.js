import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
 import './css/style.css';
import p1 from "./img/register_img/wave.png";
import p2 from "./img/register_img/bg.svg";
import p3 from "./img/register_img/avatar.svg";
import './js/main';

import { useNavigate } from 'react-router-dom'
const Register = () => {
const navigate = useNavigate();
const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[confirm_password,setConfirm_password]=useState('');
const[phone,setPhone]=useState('');
const[error,setError]=useState(' ');
const[status,setStatus]=useState(' ');



const registerUser=async(e)=>{
  e.preventDefault();
 
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }

    const {data}=await axios.post('http://localhost:5000/registration',{
      name,
      email,
      password,
      confirm_password,
      phone
    },config);
    // console.log(data);
    // console.log(data.status)
    // localStorage.setItem('userinfo',JSON.stringify(data))
 
    setStatus(200);
    if(data){
      toast.success('Registration Success',{
        position: 'top-center'
      });
    }
    // window.alert("Registration Success");
    //  navigate("/login");
   
  }catch(err){
    if(err){
      toast.error(err.response.data,{
        position: 'top-center'
      });
     }
    setStatus(err.response.status)
    setError(err.response.data)
  }
}

  return (
  <>
  
  <img className="wave" src= {p1} alt=" "/>
  <div className="container">
    <div className="img">
      <img src={p2} alt=" "/>
    </div>
    <div className="login-content">
      <form onSubmit={registerUser}>
      <ToastContainer />
        <img src={p3}alt=" "/>
        <h2 className="title">Welcome</h2>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            {/* <h5>Username</h5> */}
            <input 
         
            type="text" 
            className="input"  
            placeholder='Name'
            name="name"
            id="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-div one">
          <div className="i">
            <i className="fas fa-user" />
          </div>
          <div className="div">
            {/* <h5>Email</h5> */}
            <input 
             name="email"
            id="email"
            type="email" 
            className="input" 
            placeholder='Email' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
           

            />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            {/* <h5>Password</h5> */}
            <input
             name="password"
        
             type="password"
              className="input" 
              placeholder='Password' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

              />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            {/* <h5>Password</h5> */}
            <input 
            name='confirm_password'
            id="confirm_password"
            type="password"
             className="input" 
              placeholder='Confirm Password'
              value={confirm_password}
              onChange={(e)=>setConfirm_password(e.target.value)}
              />
          </div>
        </div>
        <div className="input-div pass">
          <div className="i">
            <i className="fas fa-lock" />
          </div>
          <div className="div">
            {/* <h5>Password</h5> */}
            <input 
            name='phone'
            id="phone"
            type="phone"
             className="input" 
              placeholder='Phone'
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              />
          </div>
        </div>
        
        <br />
        <input type="submit" className="btn" value="Register"/>
        <div className='sample'>
        <h6>Already have an account?</h6>
       <span> <NavLink to='/login'>LOGIN</NavLink></span>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}

export default Register