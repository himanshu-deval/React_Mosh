import { Fragment } from "react";

function ListGroup() {
  let items=[
    'NewYork',
    'San Francisco',
    'Tokyo',
    'London',
    'paris',
  ]
  // items=[];
const lst=() =>items.map(item => <li key={item}>{item}</li>)
  
  return (
    <>
      {items.length===0?<h2>No items found</h2>:lst()}
      
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
