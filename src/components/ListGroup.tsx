import React, { Fragment, useState } from "react";

interface props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: props) {
  const [selected, setSelected] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group list-group-flush">
        {items.map((item, index) => (
          <li
            className={
              selected === index
                ? "list-group-item active"
                : "list-group-item-action disabled "
            }
            key={item}
            onClick={() => {setSelected(index);
              onSelectItem(item);
            }}
          >
            {item}
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
