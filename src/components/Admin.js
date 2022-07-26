import { Link } from "react-router-dom";
import User from "./User";
import Menu from "./Menu"
import React from 'react'

const Admin = () => {
  return (
  <>
       <Menu/>

   <section>

<h1>Admins Page</h1>
<br />
{/* <User /> */}
<div className="flexGrow">

    <Link to ="/">Home</Link>
</div>


   </section>
   </>
  )
}

export default Admin