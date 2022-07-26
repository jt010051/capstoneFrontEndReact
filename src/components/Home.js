import React, { useEffect, useState } from 'react'
import Menu from './Menu';
import Song from './Song'
import Admin from './Admin';

 const Home = ({songToParent, homeToAdmin}) => {
const [data, setData] = useState(0);
const  [shoppingCart, setShoppingCart] =useState([])

const songToHome =(cart)=>{
  setData(cart)

}
const songToCart=(c)=>{
  setShoppingCart(c)
 songToParent(shoppingCart)

}


  return (
   <>
  
 <Menu />
    {/*  *ngFor="let song of songs | orderBy: key: reverse |  paginate: {itemsPerPage:itemsPP,currentPage:p};" */}
{/* <Song  /> */}
      
 
 
 

{/* <pagination-controls class="text-right" (pageChange)="p = $event"></pagination-controls>
<app-edit-song *ngIf="action === 'edit'" [song]="selectedSong" (dataChangedEvent)="ngOnInit()"></app-edit-song> */}

   
   </>
  )
}

export default Home;