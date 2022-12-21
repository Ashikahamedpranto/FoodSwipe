import React, { useState } from 'react'
import axios from 'axios';
import {Dialog,DialogActions,
  DialogContent,DialogContentText,
  DialogTitle,Button,TextField, CardMedia, Container   } from '@material-ui/core';
import { Add, SystemUpdate } from '@material-ui/icons';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const FoodInsertForm = (RestaurantName) => {

const navigate=useNavigate();
  // console.log(RestaurantName)
const[foodName,SetfoodName]=useState(''); 
const[foodPrice,SetfoodPrice]=useState(''); 
const[foodStock,SetfoodStock]=useState(''); 
const[foodRating,SetfoodRating]=useState(''); 
const[foodCategory,SetfoodCategory]=useState(''); 
const[foodImg,SetfoodImg]=useState('https://res.cloudinary.com/cse347/image/upload/v1661514247/FoodSwipe/vector-empty-transparent-background-transparency-grid-seamless-pattern-171149540_ezgfv0.jpg')
const [baseImage, setBaseImage] = useState("");
const[error,setError]=useState(' ');
const[status,setStatus]=useState(' ');



 /* height: 100%;
width:100%; */
/* z-index: 2; */

const [open,setOpen]=useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const insertFoods=async(e)=>{
      e.preventDefault()
   try{
    const config={
      headers:{
       "Content-Type": "application/json",
      }
    }

    const {data}=await axios.post(`http://localhost:5000/insertFood/${RestaurantName}`,{
      foodName,
      foodPrice,
      foodStock,
      foodRating,
      foodCategory,
      foodImg
  
    },config);
    // console.log(data);
    // console.log(data.status)
    // localStorage.setItem('userinfo',JSON.stringify(data))
 
    setStatus(200);
  
    // window.alert("Registration Success");
    window.location.reload();
   
  }catch(err){
    console.log(err)
    // setStatus(err.response.status)
    // setError(err.response.data)
  }
    }






const ImgContainer=styled.div`

`
const ButtonTag=styled.div`
width:30%
display:flex;
justify-content:center

`

const imageHandler=(e)=>{
  e.preventDefault();
  const file = e.target.files[0];
  const fileReader = new FileReader();
  fileReader.onload = () => {
    // console.log(fileReader.result.toString());  
    SetfoodImg(fileReader.result.toString());

  };
 fileReader.readAsDataURL(file)

}


  return (
 <>
  
    <Button  onClick={handleClickOpen}>
    <Add   style={{ fontSize: "45px",color:"grey"}}  />
    </Button>

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" >
      <DialogTitle id="form-dialog-title"    style={{
        color: 'green'}}>ADD FOOD</DialogTitle>
       
      <DialogContent>
      <form onSubmit={insertFoods} id="insertFoods">
      <ImgContainer>
      <CardMedia
        component="img"
        height="140"
        id="foodImg"
        image={foodImg}
       value={foodImg}
        alt=""

      />
      <ButtonTag>
 
  <input type='file' accept="image/*"  onChange={(e)=>{
    imageHandler(e)}}/>


  </ButtonTag>
</ImgContainer>
        <TextField
          autoFocus
          margin="dense"
          id="foodName"
          label="Food Name"
          type="text"

          value={foodName}
          fullWidth
          onChange={(e)=>SetfoodName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="foodPrice"
          label="Food Price"
          type="text"
          value={foodPrice}
        fullWidth
          onChange={(e)=>SetfoodPrice(e.target.value)}
        />
     
        <TextField
          autoFocus
          margin="dense"
          id="foodStock"
          label="Food Stock"
          type="text"
          value={foodStock}
          fullWidth
          onChange={(e)=>SetfoodStock(e.target.value)}
        />
           <TextField
          autoFocus
          margin="dense"
          id="foodRating"
          label="Food Rating"
          type="text"
          value={foodRating}
          fullWidth
          onChange={(e)=>SetfoodRating(e.target.value)}
         
        />
            <TextField
          autoFocus
          margin="dense"
          id="foodCategory"
          label="Food Category"
          type="text"
          value={foodCategory}
          fullWidth
          onChange={(e)=>SetfoodCategory(e.target.value)}
         
        />
            </form>
      </DialogContent>
  
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button  color="primary" type="submit"  form="insertFoods" >
        INSERT
        </Button>
  
      </DialogActions>
  
    </Dialog>

</>
  )
}

export default FoodInsertForm 