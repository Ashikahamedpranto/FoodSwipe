import { Add, Remove } from "@material-ui/icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 70px;
  

`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ButtonTag=styled.div`
  margin-top:30px
`


const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:30px

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor:pointer
`;

const Amount = styled.span`
  width: 70px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const SingleFood = ({singleItem}) => {


const [singlefood,setSinglefood]=useState('');
const[quantity,setQuantity]=useState(1);
const [status,setStatus]=useState('');
const {id}=useParams();
// console.log(useParams())
// console.log(id) 


useEffect(()=>{
  const getSingleFood=async()=>{
    try{ 
       const config={
           headers:{
            "Content-Type": "application/json",
           }
         }
       const res=await axios.get(`http://localhost:5000/getSingleFood/${id}`,config)
        // console.log(res.data)
       setStatus(200)
       setSinglefood(res.data)
       }catch(err){
         setStatus(err.status)
       }  
   }
   getSingleFood()
},[])

const handleQuantity=(type)=>{
if(type==="dec"){

quantity>1 &&setQuantity(quantity-1)
}else{
  setQuantity(quantity+1)
}
}
const dispatch=useDispatch()
 const handleCart=()=>{
 const payload={
    product: id,
    foodName: singlefood.foodName,
    foodImg: singlefood.foodImg,
    foodPrice:singlefood.foodPrice,
    foodStock: singlefood.foodStock,
    qty:quantity
  }
  dispatch({type:'Add_to_cart',payload})
 
} 
  return (
    <Container>
  
      <Wrapper>
        <ImgContainer>
          <Image src={singlefood.foodImg}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{singlefood.foodName}</Title>
          <Desc>
          {singlefood.foodDescription}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare. */}
          </Desc>
          <Price>Tk {singlefood.foodPrice}</Price>
   
          <AddContainer>
     
    
            <AmountContainer>
              <Remove onClick={()=>handleQuantity("dec")}/>
              <Amount><h4>{quantity}</h4></Amount>
              <Add onClick={()=>handleQuantity("inc")}/>
            </AmountContainer>
          
          </AddContainer>
          <ButtonTag>
          <Button onClick={handleCart}>ADD TO CART</Button> 
         
          </ButtonTag>
          
        </InfoContainer>
 
      </Wrapper>
     
      <Footer />
    </Container>
  );
};

export default SingleFood;