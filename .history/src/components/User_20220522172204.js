// import React, { useState, useEffect } from 'react'
// import useAxiosPrivate from '../hooks/useAxiosPrivate';
// import { useLocation, useNavigate } from 'react-router-dom';
// const User = () => {
// const axiosPrivate = useAxiosPrivate();
// const navigate = useNavigate();
// const location = useLocation();

//     const [users, setUsers]=useState();
//     useEffect(()=>{

// let isMounted = true;
// const controller = new AbortController();
// const getUsers = async()=>{
// try{
// const res = await axiosPrivate.get('/api/auth/users',{
//     signal :controller.signal

// })
// console.log(res.data);
//     isMounted && setUsers(res.data);
// }catch(err){
//     console.log(err)
//     //navigate('/login',{ state:{from: location}, replace: true})
// }


// }
// getUsers();
// return()=>{
//     isMounted=false;
//     controller.abort();
// }
//     },[])
//   return (
//     <article>
// <h2>Users List</h2>
// {users?.length
// ?(
// <ul>

//     {users.map((user, i)=><li key={i}>
//         {user?.username}</li>)}
// </ul>

// ):
// <p>no users to display</p>
// }
// <br />

//     </article>
//   )
// }

// export default User