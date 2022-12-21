import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
/* position: fixed; */
`

const Title=styled.h2`
padding-top: 20px;
text-align:center;
color:#6cc070
`
const  Btn=styled.div`
text-align: center;
border-radius: 50px;
color:#6cc070
`

const Img=styled.img`
 display: block;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
  width: 130vh;
  height: 70vh;
  object-fit: cover;
`
const Success = () => {
  return (
 <Container>
     <Title>oops something wrong</Title>
     <br />
     <Img src="https://res.cloudinary.com/cse347/image/upload/v1662204676/error_gsrv4t.gif"/>
     <Btn>

     <Button variant="contained" color="secondary" >
     <NavLink to='/'>Back to home</NavLink>
     
      </Button>
     </Btn>
 </Container>
  )
}

export default Success