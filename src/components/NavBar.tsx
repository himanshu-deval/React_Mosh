import React from 'react';

interface Props{
  cartItemsCount:number,
}
const NavBar=({cartItemsCount}:Props)=>{
  return(
    <>
    <h1>cartItem:{cartItemsCount}</h1>
    </>
  )
}
export default NavBar