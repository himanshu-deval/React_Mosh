import { useState } from "react";
import Alert from "./components/Alert";
import NArray from "./components/Array";
import Button from "./components/button/Button";
import Obbjt from "./components/Obbjt"
import NavBar from "./components/NavBar";
import Cart from "./components/cart";


export default function App(){

  const [cartItems,setCartItems]=useState(['Product1','Product2'])
return(
  <>
    <NavBar cartItemsCount={cartItems.length}></NavBar>
    <Cart cartItems={cartItems} onClear={()=>setCartItems([])}></Cart>
    {/* {console.log(x)} */}
    
    {/* <img
      width="128"
      src="./loader.svg"
      alt="Emiza loader"
      style={{ filter: 'drop-shadow(0px 10px 6px rgba(0, 0, 0, 0.2))' }}
    /> */}
    <Obbjt>
    </Obbjt>
    <NArray></NArray>
    
    
    <Button text="name">name</Button>
 
  </>
)
}



// 