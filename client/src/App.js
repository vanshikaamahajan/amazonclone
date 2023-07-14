
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/newnavbar';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/footer';
import SIgn_in from './components/signup_signin/Sign_in';
import SIgnUp from './components/signup_signin/Sign_up';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useState,useEffect } from 'react';



function App() {

  const[data,setData]=useState(false);

  useEffect(()=>{
    setTimeout(()=>{
     setData(true);
    },3000)
  },[])
  return (
  <>
  {
    data ? (
      <>
       <Navbar/>
  <Newnav/>
  <Routes>
    <Route path="/" element={<Maincomp />}/>
    <Route path="/login" element={<SIgn_in/>}/>
    <Route path="/register" element={<SIgnUp />}/>
    <Route path="/getproductsone/:id" element={<Cart />}/>
    <Route path="/buynow" element={<Buynow />}/>
  </Routes>
  <Footer/>
      </>

    ):(
      <div className='circle'>
        <CircularProgress/>
        <h2>Loading...</h2>
      </div>
    )
  }
 
  
  </>
  );
}

export default App;
