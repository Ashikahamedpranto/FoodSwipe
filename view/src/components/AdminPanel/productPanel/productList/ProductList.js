// import "./productList.css";
import React, { useEffect } from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { Clear, DeleteOutline, Edit, EditAttributesOutlined, EditOutlined } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
// import ProductData from './ProductData';



const ProductList = () => {
  const columns = [
    { field: 'ID', 
    headerName: 'ID',
     width: 250,
  
    },
    { field: 'Restaurant', 
    headerName: 'Restaurant',
     width: 250,
  
    },
    {
      field: 'ProductName',
      headerName: 'Product Name',
      width: 250,
      editable: true,
    },
    {
      field: 'ProductPrice',
      headerName: 'Product Price',
      width: 250,
      editable: true,
    },
    {
      field: 'ProductStock',
      headerName: 'Product Stock',
      width: 250,
      editable: true,
    },
    {
      field: 'ProductRating',
      headerName: 'Product Rating',
      width: 250,
      editable: true,
      
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 250,
      disableClickEventBubbling: true,
      renderCell: (params) => {
          return (
              <div  style={{ cursor: "pointer" }}>
                  <EditOutlined style={{ color: "green",marginLeft:"20" }}/>
                 
                  <Clear style={{ color: "red",marginLeft:"20" }} />
               </div>
          );
       }
    }
      
  ];
  
  

  const [productData,setproductData]=useState([])

    useEffect(()=>{
     const adminProducts=async()=>{
     try{
    const config={
     headers:{
        "Content-Type": "application/json"
     }
    }
    const {data}= await axios.get("http://localhost:5000/AdminproductList",config);

 setproductData(data)
     }catch(e){
console.log(e)

     }
     }
     adminProducts()
    },[])
  // console.log(pro)
let c=0;
  const rows=productData.map((obj)=>{
  //  console.log(obj)
  c++;
    return{
      ID:c,
      Restaurant:obj.foodRestId,
      ProductName:obj.foodName,
      ProductPrice:obj.foodPrice,
      ProductStock:obj.foodStock,
      ProductRating:obj.foodRating,
     
      id:obj._id.$oid,
     
    }
    
  })

  return(
  <div style={{ height: 800, width: '100%' }}>
  <h1>ALL RESTAURANTS PRODUCT LIST</h1>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    )
}

export default ProductList