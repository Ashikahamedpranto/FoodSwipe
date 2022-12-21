
import {
    FavoriteBorderOutlined,
  
    ShoppingCartOutlined,
    PageviewOutlined,
    SystemUpdate,
    ClearAll,
    DeleteForeverOutlined,

  } from "@material-ui/icons";
  import { NavLink } from "react-router-dom";
 
  import Rating from '@material-ui/lab/Rating';
  import styled from "styled-components";
  import { useDispatch } from "react-redux";
  import { useSelector } from "react-redux";
import { useState } from "react";
import FormDailog from "../PopUpDailog/FormDailog";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    padding-bottom: 10px;
    
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  // const Circle = styled.div`
  //   width: 200px;
  //   height: 200px;
  //   border-radius: 50%;
  //   background-color: white;
  //   position: absolute;
  // `;
  
  const Image = styled.img`
    height: 100%;
    width:100%;
    z-index: 2;
    object-fit: cover;
  
  `;
  const Card=styled.div`
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    ;
    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  `
  const CardContainer=styled.div`
  padding: 2px 16px;
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
  `;

  const FoodList = ({ items }) => {
const {isAdmin}=useSelector(state=>state.auth)
const[Id,setId]=useState('');
const dispatch=useDispatch();


const deleteItem=(items)=>{

dispatch({type:'foodDelete',payload:items})
 
}
// const bolb=URL.createObjectURL(items.foodImg);
    return (
   <div >
      <Container >
        {/* <Circle /> */}
      
        <Image src={items.foodImg}/>
        <Info>
          <Icon>
          {
            isAdmin?FormDailog(items):<ShoppingCartOutlined />
          }
          
          </Icon>

          <Icon>
          {
           
          
            isAdmin? <DeleteForeverOutlined  onClick={()=>deleteItem(items)} /> : <NavLink to={`/SingleFood/${items.foodRestId}/${items.foodName}/${items._id.$oid}`}><PageviewOutlined/></NavLink>
          }
         
         
           
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Container>
      <Card>
      <CardContainer>
      <p ><b color="green">{items.foodName}</b></p>
      <p><b>Price:{items.foodPrice}</b></p>
      {/* <p> {items._id.$oid}</p> */}
      <Rating name="size-medium" value={items.foodRating} />
  </CardContainer>
      </Card>
  
      </div>  
        
    );
  };
  
  export default FoodList ;