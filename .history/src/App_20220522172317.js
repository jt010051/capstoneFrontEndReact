import './App.css';
import { booleanContext } from './Context';
  import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Menu from './components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products'
import About from './components/About'
import Cart from './components/Cart'
import Register from './components/Register'
import Login from './components/Login'
import { useEffect, useState } from 'react';
import Admin from './components/Admin';
// import { createContext } from "react";
// import { incrementContext } from './Context';
import RequireAuth from './components/RequireAuth';
import Missing from './components/Missing';
// import { refreshContext } from './Context';
import Logout from './components/Logout';
import Unauthorized from './components/Unauthorized'
const ROLES = {
  'USER': 2001,
  'ADMIN': 5150
}


function App() {
const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [cart, setCart]=useState(0)
 const admin=['[ROLE_ADMIN]']
 const [refreshToken, setRefreshToken]=useState(0)
useEffect(()=>{
if(isLoggedIn){
      localStorage.setItem("Logged In", true);

}


},[isLoggedIn])
  return (
  <>
{/* <div className="container">
{/* <booleanContext.Provider value={{isLoggedIn, setIsLoggedIn}}> */}
{/* <incrementContext.Provider value={{cart, setCart}}>
<refreshContext.Provider value = {{refreshToken, setRefreshToken}}> */}
  
  {/* <Routes>
    
 
  <Route index element={<Home />} />
   <Route path="/login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

     <Route path="/cart" element={<Cart />} />
<Route path="/products" element={<Products />} />
 <Route path="/about" element={<About />} />

  <Route path="/register" element={<Register />} />
 


    <Route path="/logout" element={<Logout />} />

   <Route>
          <Route path="/" element={<Home />} />
        </Route>

     


        <Route element={<RequireAuth allowedRoles={admin} />}>
          <Route path="/admin" element={<Admin />} />
       

              

        </Route>
         <Route path="*" element={<Missing />} />
  </Routes> */} 
{/* </refreshContext.Provider>
  </incrementContext.Provider>
</booleanContext.Provider> */}
 {/* </div> */}




      </>
  );
}

export default App;
