import React from 'react'
import Menu from './Menu'
const Register = () => {
  return (
    <>
     <Menu/>
    <h1>Register for Access</h1>

<div className="bg-warning p-1"> </div>

<form>
 <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="text" className="form-control" id="email" placeholder="email"  name="email" />
  </div>
  <div className="form-group">
    <label htmlFor="username">Username</label>
    <input type="text" className="form-control" id="username" placeholder="user name"  name="username" />
  </div>

  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input type="password" className="form-control" id="password" placeholder="password"  name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
  </div>
   <div className="form-group">
    <label htmlFor="password">Confirm Password</label>
    <input type="password" className="form-control" id="password" placeholder="password"  name="password" required/>
  </div>
<br></br>
  <button type="button" className="btn btn-primary" >Register</button>


<div id="message">
  <h3>Password must contain the following:</h3>
  <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
  <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
  <p id="number" className="invalid">A <b>number</b></p>
  <p id="length" className="invalid">Minimum <b>8 characters</b></p>
</div>
</form>
    </>
  )
}

export default Register