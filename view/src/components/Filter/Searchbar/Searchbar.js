
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import './SearchBar.css';
// const Container=styled.div`
// display:flex
// `
// const Searchbox=styled.div`

// `

// const SearchBar = ({RestaurantName}) => {
//   const dispatch=useDispatch()
//   const navigate=useNavigate();
//   /* console.log(RestaurantName) */
//   const [keyword,setKeyword]=useState('')
//   const submitHandler=e=>{
//     e.preventDefault();
//     if(keyword.trim()){
//     /* console.log(keyword) */
//       /* navigate (`/RestaurantMenu/${RestaurantName}/${keyword}`) */
//       dispatch({type:'SearchFood',payload:keyword})
//       setKeyword("")
//     }
//     else{
//       navigate(`/RestaurantMenu/${RestaurantName}`)
//       setKeyword("")
//     }

//   }

// return(

//   <form className="search" action="" onSubmit={submitHandler}>
//   <Container>
//   <Searchbox>
//   <input type="search" placeholder="Search here..." value={keyword}  onChange={(e)=>setKeyword(e.target.value)}/>
//   </Searchbox>
//   <button type="submit">Search</button>
//   </Container>
// </form>

// )
// };

// export default SearchBar;   

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';

import {Search} from '@material-ui/icons';

const SearchBar = ({value}) => {
  const dispatch=useDispatch()
  const[keyword,setKeyword]=useState('');
  const changeInput=(e)=>{
    e.preventDefault()
    dispatch({type:'SearchFood',payload:e.target.value})
  // console.log(e.target.value)  
  setKeyword('');
  }
  return(
  <div className='searchBar-wrap'>

    <Search className='searchBar-icon' />
    <input
     type='text'
     placeholder='Search Food'
     
     onChange={changeInput}
/>
    
  </div>
)
};

export default SearchBar; 