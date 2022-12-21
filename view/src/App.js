import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/Navbar/Navbar'
import FoodMenu from './components/RestaurantItem/FoodMenu'
import Home from './components/Home'
import SingleFood from './components/singleFoodpage/singleFood'
import Cart from './components/Cart/Cart'
import User from './components/userProfile/user/User'
import AdminDashboard from './components/AdminPanel/Combinefeatures'
import ProductList from './components/AdminPanel/productPanel/productList/ProductList'
import Stripe from './components/StripeCheckout/Stripe'
import Success from './components/Utils/Success/Success'
import AuthOutlet from './components/privateRoute/AuthOutlet'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { dispatchLogin } from './components/redux/action/authAction'
import NotFound from './components/Utils/404/NotFound'




const App = () => {
  const dispatch=useDispatch();
  const data=JSON.parse(localStorage.getItem('userinfo'));
  // console.log(data._id.$oid)
  if(data){
    dispatch(dispatchLogin())
    dispatch({type:'userinfo',payload:data})
  }

  return (
   <>
   <Navbar/>

   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/RestaurantMenu/:Restaurant" element={<FoodMenu/>} />
   <Route path="register" element={<Register />} />
   <Route path="login" element={<Login />} />

   <Route  element={<AuthOutlet/>}>
   <Route path="/SingleFood/:foodRestId/:foodName/:id" element={<SingleFood/>} />
   </Route>

   <Route path="/cart" element={<Cart/>} />
   <Route path="/adminDashboard" element={<AdminDashboard />}/>
   <Route path="/AdminproductList" element={<ProductList/>} />   
   <Route path="/UserProfile/:userId" element={<User/>}/>
   <Route path="/payment" element={<Stripe/>}/>
   <Route path="/success" element={<Success/>}/>
   <Route path="/*" element={<NotFound/>}/>

   </Routes>

    </> 
  )
}

export default App