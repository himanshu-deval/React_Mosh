import React, { ReactElement, useRef } from "react";

const Form = () => {
  const nameRef=useRef<HTMLInputElement>(null);
  const ageRef=useRef<HTMLInputElement>(null);
  const person={name:'', age:0};
const handleSubmit=(event: ReactElement)=>{
  event.preventDefault();
  if(nameRef.current!==null && ageRef.current !==null){
 person.name= nameRef.current.value;    
 person.age=parseInt(ageRef.current.value);
    console.log(person);
  }
}
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} id="name" className="form-control" type="text"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input ref={ageRef} id="age" className="form-control" type="Number"></input>
      </div>
      <button className="btn btn-primary" type="submit">Submit</button>
    </form>
  );
};
export default Form;
