// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import ReactPaginate from 'react-paginate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartPlus, faEdit, faDeleteLeft, faTrash, faEraser, faSort } from '@fortawesome/free-solid-svg-icons';
// import { useContext } from 'react';
// import { booleanContext, incrementContext } from '../Context';

// const url="http://localhost:8080/api/songs";


// const Song = () => {

// const options =[
// {value: 5, label: "5 Items Per Page"},
// {value: 10, label: "10 Items Per Page"},
// {value: 15, label: "15 Items Per Page"}
// ] 

// let key='id';
//   let reverse =false;

//   const sort=(key)=> {
//     this.key.reverse();
//   }

// const [searchTerm, setSearchTerm] =useState('')
// const [songs, setSongs]=useState([])
// const[button, setButton] = useState(false);
// const [loading, setLoading]=useState(false)
// const [pageNumber, setPageNumber] = useState(0)
// const [itemsPP, setItemsPP] = useState(options[0].value);
// const pagesVisited = pageNumber*itemsPP;
// const [storage, setStorage]=useState([]);

// const [editButton, setEditButton] =useState(false);
// const [deleteButton, setDeleteButton] =useState(false);
// const [trashButton, setTrashButton] =useState(false);
// const{isLoggedIn} =useContext(booleanContext )
// const{cart, setCart} =useContext(incrementContext )


// useEffect(()=>{
// if (localStorage.getItem("Logged In", true)){
// setDeleteButton(true);

// }

// },[])

// const cartCounter =()=>{

//   setCart((prev)=>prev + 1)
  

// }
// const toCart=(song)=>{
// setStorage(song);


// }

// const displaySongs = songs.filter((val)=>{
// if(searchTerm === ""){
//   return val;
// }
// else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
// return val;

// }
// else if(val.artist.toLowerCase().includes(searchTerm.toLowerCase())){
// return val;

// }
// else if(val.genre.genre.toLowerCase().includes(searchTerm.toLowerCase())){
// return val;

// }

// }).slice(pagesVisited, pagesVisited+itemsPP)
// .sort()
// .map((song)=>{

// return(
// <React.Fragment key={song.id}>
//  <tbody>
//       <tr>
// <td>{song.title}</td>
//       <td>{song.artist}</td>
//       <td>{song.price}</td>
//       <td>{song.quantity}</td>
//       <td>{song.genre.genre}</td> 
//             <td className="d-flex px-0">
//   <a  onClick={()=>{
// if(song.quantity>0){
// cartCounter();

// song.quantity--;
// toCart(song.title)


// }
//  else if(song.quantity<=0){
//  song.quantity=0;
// setCart(cart+=0)
// }

//   }}><FontAwesomeIcon icon= {faCartPlus}  
//         className="mx-2" />

//         </a>
// <a>  {   cart>0 ? <FontAwesomeIcon icon=  {faDeleteLeft}
//        className="mx-2" />   : null  }</a>
//        <a>  {   editButton ? <FontAwesomeIcon icon=  {faEdit}
//        className="mx-2" />   : null  }</a>
//        <a>  {   trashButton ? <FontAwesomeIcon icon=  {faTrash}
//        className="mx-2" />   : null  }</a>
    
//       </td>
//       </tr>
//        </tbody>
//       </React.Fragment>
// )
// })


// const fetchSongs = () =>{
// setLoading(true);

//     axios.get(url).then(res=>{
// setSongs(res.data)

// setLoading(false)
//     });
// };
// useEffect(()=>{
//     fetchSongs();

     
// },[])

// const pageCount =Math.ceil(songs.length / itemsPP);
// const changePage = ({selected}) =>{
// setPageNumber(selected)

// }


// if (loading){
//     return <h1>Loading...</h1>
// }
  

//   return (
// <>
//   <h1 className="pt-5">All Songs</h1>
// <h5>Check out all the awesome songs available now!</h5>
// <hr />
// <div className="row mb-3">
//   <div className="dropdown col-md-2">
//     <select name={itemsPP} id="dropdownMenuButton" className="btn btn-light dropdown-toggle"onChange={(event)=>{
//       setItemsPP(event.target.value)
  
//     }} value={itemsPP}>
// <option value={options[0].value}>{options[0].label}</option>
// <option value={options[1].value}>{options[1].label}</option>
// <option value={options[2].value}>{options[2].label}</option>
//     </select>
//   </div>
// { button ?   <button type="button" className="btn btn-sm btn-primary mp-0 col-md-1">Add Song</button> : null }
 

//   <div className="col-md-4 offset-md-5">
//     <input id="search" type="text" className="form-control bg-light" name="songTitle"  placeholder="&#x266C; Search your favorite song &#x266B;" size="4" onChange={event=>{
// setSearchTerm(event.target.value);
//     }}></input>
//   </div>
// </div>
// <table className="table">
//   <thead>
//     <tr>
//       <th >Title&nbsp;<FontAwesomeIcon icon= {faSort} ></FontAwesomeIcon> </th>
//       <th >Artist&nbsp;<FontAwesomeIcon icon= {faSort}></FontAwesomeIcon> </th>
//       <th >Price &nbsp;<FontAwesomeIcon icon= {faSort}></FontAwesomeIcon> </th>
//       <th >Quantity&nbsp;<FontAwesomeIcon icon= {faSort}></FontAwesomeIcon> </th>
//       <th >Category&nbsp;<FontAwesomeIcon icon= {faSort}></FontAwesomeIcon> </th>
//       <th>Action(s)</th>
//     </tr>
//   </thead>

// {displaySongs}
// </table>
// <ReactPaginate
// previousLabel={"Previous"}
// nextLabel={"Next"}
// pageCount={pageCount}
// onPageChange={changePage}
// containerClassName={"pagination"}
// previousLinkClassName={"prev"}
// nextLinkClassName={"next"}
// disabledClassName={"paginationDisabled"}
// activeClassName={"paginationActive"}
// pageClassName={'page'}
// />
// </>
//   );
// }

// export default Song