import React, { useState } from 'react';
import Button from "./button/Button"

const Obbjt=()=>{
  const [obj,setObj]=useState({
    Drink:'Americano',
    price:50,
  })

  const handleClick=()=>{
    const newObj={
      Drink:'Coffee',
      price:40
    }
    // const x=obj.Drink='Tea';
    setObj(newObj);
   
  }
  return(
    <>
    <h1>Got this {obj.Drink} For {obj.price}</h1>
    <button onClick={handleClick} text="Click">Child</button>
    </>
  )
}
export default Obbjt;