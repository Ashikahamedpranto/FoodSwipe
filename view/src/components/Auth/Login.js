import React,{useEffect, useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './css/style.css'
import p1 from "./img/register_img/wave.png";
import p2 from "./img/register_img/bg.svg";
import p3 from "./img/register_img/avatar.svg";
import adminpic from './img/register_img/login.svg'
import back from './img/register_img/online4.jpg'
import './js/main';
import { useNavigate } from 'react-router-dom';
// import {dispatchLogin} from '../redux/actions/authAction';
import { dispatchLogin } from '../redux/action/authAction';
import {useDispatch, useSelector} from 'react-redux'

const Login = () => {  
const {isAdmin}=useSelector(state=>state.auth)

const navigate = useNavigate();
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const[error,setError]=useState({});
const[success,setSuccess]=useState(true);
const[status,setStatus]=useState(' ');
const dispatch=useDispatch()



const loginUser=async(e)=>{
  e.preventDefault();
  
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }
    
    const {data}=await axios.post('http://localhost:5000/login',{
      email,
      password
    },config);
    // console.log(data);

    localStorage.setItem('userinfo',JSON.stringify(data));

    setStatus(200);
    dispatch(dispatchLogin())
    
    dispatch({type:'userinfo',payload:data})

    if(data){
      toast.success('LOG IN SUCCESS',{
        position: 'top-center'
      });
    }
    // window.alert("Login Success");

    navigate("/");
    
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
   
  <img className="wave" src={back} alt=" " />
      <div className="container">
        <div className="img">
          <img  alt=" " style={{ display:  "none" }}/>
        </div>
        <div className="login-content">
       
        
       
      
          <form onSubmit={loginUser}>
          <ToastContainer />
            <img src={p3} alt=" " />
            <h2 className="title">Welcome</h2>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div className="div">
              
                <input
                  name="email"
                  id="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div className="div">
                
                <input
                  name="password"
            
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            <br />
            {/* onClick={()=>notify(error,status)} */}
            <input type="submit" className="btn" value="Login"  />
            <div className='sample'>
        <h6>Don't Have an Account?</h6>
       <span> <NavLink to='/register'>REGISTER</NavLink></span>
      
        </div>
        
        <span > <NavLink to='/forgotpassword' style={{color: "red",fontWeight:"500",fontSize:"20px",paddingLeft:"100px"}}>Forgot Password</NavLink></span>
          </form>
        </div>
      </div>
  
  </>
  )
}

export default Login