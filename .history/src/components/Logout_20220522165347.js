import React, { useEffect } from 'react'
import Menu from './Menu'
import { useContext } from 'react';
import { booleanContext } from '../Context';
const Logout = () => {

    const{isLoggedIn, setIsLoggedIn} =useContext(booleanContext )
useEffect(()=>{
setIsLoggedIn(false)
localStorage.removeItem("Logged In")
},[setIsLoggedIn])
  return (
      <>
      <Menu />
    <div>You Have Successfuly been logged out</div>
    </>
  )
}

export default Logout