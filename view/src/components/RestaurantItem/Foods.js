import React,{useState,useEffect} from "react";
import axios from 'axios'
import styled from "styled-components";
import FoodList from "./FoodList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { Add, AddBox, AddBoxOutlined, AddCircle, AddCircleOutline, AddToQueue } from "@material-ui/icons";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Left=styled.div`
   position: absolute;
   top: 110%;
    right: 60%;

`

  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
`

const Foods = ({RestaurantName,filters}) => {
  let flag=0;
  // console.log(RestaurantName,filters,sort)
  const[foods,setFoods]=useState([])
  const[status,setStatus]=useState('')
  const {Restaurant}=useParams()
  // console.log(Restaurant)
//    console.log(useParams())
  const filter=useSelector(state=>state.filter)
  const {isAdmin}=useSelector(state=>state.auth)
const{deleteId,restId}=useSelector(state=>state.foodCrud)
   const{searchItem,sort,rating}=filter

    // console.log(typeof(rating))
  
//   const{searchItem,sort,rating  }=filter
  // console.log(searchItem)
  const dispatch=useDispatch();

  useEffect(()=>{
    const  deleteSingleFood=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
           
         const res=await axios.get(`http://localhost:5000/deleteSingleFood/${deleteId}/${restId}`,config)
         
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
          // console.log(err)
         }  
     }
     deleteSingleFood()
  },[deleteId])

   useEffect(()=>{
    const  getSearchFood=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get(`http://localhost:5000/getSearchFood/${Restaurant}/${searchItem} `,config)
       
         
          
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
     getSearchFood()
  },[Restaurant,searchItem])

//   console.log(Restaurant)
  //  console.log(sort.length)
  useEffect(()=>{
    const getAllFoods=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
    
         const res=await axios.get(` http://localhost:5000/getAllFoods/${Restaurant}`,config)
      
         
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
      getAllFoods()
  },[Restaurant])

  useEffect(()=>{
    const  getSortFoods=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get(`http://localhost:5000/getSortFoods/${Restaurant}/${sort} `,config)
          // console.log(res.data)
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
     getSortFoods()
  },[Restaurant,sort])

  useEffect(()=>{
    const  getRatingFood=async()=>{
      try{ 
         const config={
             headers:{
              "Content-Type": "application/json",
             }
           }
         const res=await axios.get(`http://localhost:5000/getRatingFoods/${Restaurant}/${rating}`,config)
         
         setStatus(200)
         setFoods(res.data)
         }catch(err){
           setStatus(err.status)
         }  
     }
     getRatingFood()
  },[Restaurant,rating])

  
 useEffect(()=>{
  dispatch({type:'ItemInfo',payload:foods});
 },[foods])

  
  // console.log(isAdmin)

  return (
    <Container>
      {foods.map((item,pos) => (
        <FoodList items={item} key={pos} />
      ))}
  
  

    </Container>
 
  );
};

export default Foods;