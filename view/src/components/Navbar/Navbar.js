import React,{MouseEvent} from "react";
import styled from "styled-components";
import { AccountCircleOutlined, Search,ShoppingCartTwoTone } from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileDropDown from './ProfileDropDown'

const Container = styled.div`
 
   background-color: #f1f0f063;
   height: 70px;

`;
const Cart=styled.div``
const Wrapper = styled.div`
padding-left:25px;
 padding-top:20px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;


const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;
const RightSidebar = styled.div`
  font-size: 30px;
  cursor: pointer;
  margin-left: 20px;
  padding-right: 25px;
`;
const Auth=styled.div`
display: flex;
`;
const ProfileIcon=styled.div`
display: flex;
/* padding-bottom: 10px; */
`
const Navbar = () => {
const cart=useSelector(state=>state.cart);
const{cartItems}=cart;
const  cartSize = Object.keys(cartItems).length;


const auth=useSelector(state=>state.auth);
const{user,isLogged}=auth


const userLink=()=>{
  
 

  return <div>
      <ProfileIcon>

     <ProfileDropDown/>
  

     </ProfileIcon>
  </div>
}

  return (
    <Container>
      <Wrapper>
      <Left>
          <Logo>
          {/* <h5>FOOD SWIPE</h5> */}
    <NavLink to='/' ><h5>FOOD SWIPE</h5></NavLink> 
          {/* <NavLink to='/RestaurantList' ><h5>FOOD SWIPE</h5></NavLink> */}
          </Logo>
          
        </Left>

        <Right>
        {
          isLogged?userLink():
        <Auth>
           <RightSidebar> 
          <NavLink to='/register'><h5>REGISTER</h5></NavLink>
          </RightSidebar> 
          <RightSidebar> 
          <NavLink to='/login'><h5>LOGIN</h5></NavLink>
          </RightSidebar> 
          </Auth>
        }
          <RightSidebar>
     
     <Badge badgeContent={cartSize} color="primary">
   
  
       <NavLink to='/cart'><ShoppingCartTwoTone fontSize="large" style = {{ marginBottom:8}}/></NavLink>
      
     </Badge>
  
   </RightSidebar>
            
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
