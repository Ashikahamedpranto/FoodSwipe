import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import styled from "styled-components";
import { sliderItems } from "../../data/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color:; */
  position: relative;
  background-color: #f1f0f063;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #eccfcf;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;

  /* next page sliding animation */
  transition: all 1.5s ease; 
/* this arribute helps sliding to next page */
   transform: translateX(${props=>props.slideIndex * -100}vw); 

`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props)=>props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  object-fit: cover;
`;
const Img = styled.img`
  height: 80%;
  object-fit: cover;
  ;
  /* width:10px;
height: 10px; */
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 200px;
`;
const Title = styled.h1`
  font-size: 70px;
  padding-bottom: 50px;
`;
const Desc = styled.p`
  font-size: 30px;
  /* margin-top: 30px; */
  padding-left: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
  z-index: 2;
`;
const Slider = () => {
  const[slideIndex,setSlideIndex]=useState(0);
  const handleClick=(direction)=>{
 if(direction==='left'){
   setSlideIndex(slideIndex>0? slideIndex-1 : 2)
 }else{
   setSlideIndex(slideIndex<2? slideIndex+1:0)
 }
  }
  
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
      {sliderItems.map((item)=>(
        <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>View Menu</Button>
          </InfoContainer>
        </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
