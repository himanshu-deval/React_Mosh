import React, { Fragment, useState } from "react";

interface props{
  items:string[],
  heading:string,
}
function ListGroup({items,heading}:props) {

const [selected,setselected]=useState(-1);
  
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item,index) =>(
        <li className={selected===index ? "list-group-item active":"list-group-item"}
          key={item}
          onClick={()=>setselected(index)}
          >{item}
        </li>
        ))}

      </ul>

      <h1>this is a heading</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

export default ListGroup;
