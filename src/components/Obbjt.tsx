import React, { useState } from "react";
import Button from "./button/Button";

const Obbjt = () => {
  const [obj, setObj] = useState({
    Name: "Rahul",
    address: {
      city: "Delhi",
      zipcode: 110019,
    },
  });

  const handleClick = () => {
    setObj({ ...obj, address: { ...obj, city: "Jind", zipcode: 126113 } });
  };
  return (
    <>
      <h1>
        I am {obj.Name} and i live in {obj.address.city} {obj.address.zipcode}
      </h1>
      <button onClick={handleClick} text="Click">
        Child
      </button>
    </>
  );
};
export default Obbjt;
