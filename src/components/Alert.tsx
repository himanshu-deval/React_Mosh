import { useState } from "react";
import styles from './button/Button.module.css'

interface Props {
  children:string,
  color?:"primary"|"secondary"|"Danger"
}
export const x = () => console.log('10');


const  Alert=({children,color}:Props)=>{
 const [alertVisible,setAlertVisible]=useState(false);
  
  return(
    <>
      
      {alertVisible && <div className="alert alert-warning alert-dismissible fade show"><h1>{children}</h1>
        <button className="btn-close" onClick={()=>setAlertVisible(false)}></button>
        </div>}

       <button className={[styles.btn,styles['btn-'+ color]].join(' ')} onClick={()=>{setAlertVisible(true)}}>Button</button>  
    </>
  )
}
export default Alert;
