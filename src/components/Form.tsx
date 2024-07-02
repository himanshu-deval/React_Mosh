import React, { ReactElement, useRef, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    Name: "",
    age: 0,
  });
  const handleSubmit = (event: ReactElement) => {
    event.preventDefault();
    console.log("Submitted");
    console.log(person);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, Name: event.target.value })
            }
            id="name"
            value={person.Name}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
            id="age"
            value={person.age}
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
