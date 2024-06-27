import React, { useState } from 'react';



const NArray=()=>{
  const [arr,setArr]=useState([
    {id:1,title:"Bug1",toFixed:"false"},
    {id:2,title:"Bug2",toFixed:"false"},
                               
  ])
  const handleClick=()=>{
    setArr(arr.map(arr=>arr.id===1? {...arr,title:"true"}:arr)
  )}


  return(
   <>
      <h1>The id is {arr.map(item=><p>{item.title}</p>)}</h1>
      <button onClick={handleClick}>Click</button>
   </>
    
  )
}
export default NArray;