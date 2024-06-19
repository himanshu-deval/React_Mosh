import { useState } from "react";
import Button from "./Button";

interface Props {
  children:string,
}

const  Alert=({children}:Props)=>{
 const [alertVisible,setAlertVisible]=useState(false);
  return(
    <>
      {alertVisible && <div className="alert alert-warning alert-dismissible fade show"><h1>{children}</h1>
        <button className="btn-close" onClick={()=>setAlertVisible(false)}></button>
        </div>}

       <button className="btn btn-primary" onClick={()=>{setAlertVisible(true)}}>Button</button>  
    </>
  )
}
export default Alert;
