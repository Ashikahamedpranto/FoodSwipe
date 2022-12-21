import { Checkbox,  FormControlLabel, FormGroup } from '@material-ui/core'
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import Rating from '@material-ui/lab/Rating';

const Size=styled.div`
width: 250px;

`
const ItemType=styled.div`
max-width: 550px;

`
const CheckFilter = () => {
const dispatch=useDispatch()

const handleRating=(e)=>{
  dispatch({type:'ratingFilter',payload:e.target.value})
}

  return (
    
    <FormGroup>
       <Size>
       <h5>PRICE</h5>
        <FormControlLabel control={<Checkbox />} label="HIGH-LOW"/>
        <FormControlLabel control={<Checkbox />} label="LOW-HIGH"/>
        <br />
        <br />
        <h5>RATING</h5>
        <Rating name="size-medium" defaultValue={0} onChange={handleRating}/>
        <br />
        <br />    
        </Size>
    </FormGroup>
  )
}

export default CheckFilter