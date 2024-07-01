import React from "react";

const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input id="name" className="form-control" type="text"></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <input id="age" className="form-control" type="Number"></input>
      </div>
    </form>
  );
};
export default Form;
