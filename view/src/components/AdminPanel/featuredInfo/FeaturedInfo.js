import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function FeaturedInfo() {
const[totalFoods,setTotalFoods]=useState()
const[totalUsers,setTotalUsers]=useState()
const[totalRest,setTotalRest]=useState()
useEffect(()=>{
  const total=async()=>{
  try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }
    const {data}=await axios.get('http://localhost:5000/adminDashboard',config)
 
    const{TotalFoods,TotalRest,TotalUsers}=data
    setTotalFoods(TotalFoods)
    setTotalRest(TotalRest)
    setTotalUsers(TotalUsers)

  }catch(e){
console.log(e)
  }
  }
  total()
},[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">ACTIVE USER</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalUsers}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">TOTAL RESTAURANT</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalRest}</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">AVAILABLE TOTAL FOODS</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{totalFoods}</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
