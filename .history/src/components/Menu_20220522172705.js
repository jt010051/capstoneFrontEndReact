import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { useContext } from 'react';
import { booleanContext, incrementContext } from '../Context';


 const Menu = () => {
   const [showRegister, setShowRegister] = useState(true);
   const [showLogOut, setShowLogout]=useState(false);
      const [showProfile, setShowProfile]=useState(false);

    const [showLogIn, setShowLogIn]=useState(true);
const{isLoggedIn, setIsLoggedIn} =useContext(booleanContext )
const{cart, setCart} =useContext(incrementContext )
const [showAdmin, setShowAdmin]=useState(false);


useEffect(()=>{
if(localStorage.getItem("Logged In", true)){
setShowLogIn(false)
setShowLogout(true)
setShowProfile(true)
setShowRegister(false)
setShowAdmin(true)

 
}

},[isLoggedIn])


  return (
   <>
  
   <nav className="navbar navbar-expand-lg navbar-text-light bg-dark">

  <a className="navbar-brand" href="/">TayT's Music Store</a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href='/'>Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/products'>Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href='/about'>About</a>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
      <ul className="navbar-nav mr-auto2">
        <li className="nav-item">
          <Link className="nav-link" to={{
    pathname: "/cart",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}>
         Cart({cart})
          </Link>
          </li>
      
   <li className="nav-item">
        
            <a className="nav-link" 
    href= "/admin">
        Admin
          </a>
      </li>
        <li className="nav-item">
          
           { showRegister ? <a className="nav-link" href='/register'>Register</a> : null }
        </li>
        <li className="nav-item">
          
        
            { showLogIn ?   <a className="nav-link" href='login'>Login</a> : null }
        </li>
        <li className="nav-item">
          
           { showProfile ?  <a className="nav-link ">Profile</a> : null }
        </li>
        <li className="nav-item">
          
           { showLogOut ?  <a className="nav-link text-danger" href='/logout'>Log Out</a> : null }
        </li>
      </ul>
      
    </div>
  </div>
</nav>
{/* // <app-shopping-cart *ngIf=""></app-shopping-cart>
// <router-outlet></router-outlet> */}


   
   </>
  )
}

export default Menu;