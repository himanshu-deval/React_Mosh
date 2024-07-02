import {FieldValues, useForm} from "react-hook-form";
import React, { ReactElement, useRef, useState } from "react";


const Form = () => {
  const {register,handleSubmit}=useForm();
  console.log(register('name'));

  const onSubmit=(data:FieldValues)=>{
    console.log(data)
  }
 

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register('age')}
            id="age"
            
            className="form-control"
            type="Number"
          ></input>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form;
