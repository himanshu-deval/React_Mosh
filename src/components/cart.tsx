import { Button } from "antd";
import React from "react";

interface Props {
  cartItems: String[];
  onClear:()=>void
}

const Cart = ({ cartItems,onClear }: Props) => {
  return (
    <>
      <h1>items{cartItems.map(items=><li>items</li>)}</h1>
      <Button onClick={onClear}>Clear</Button>
    </>
  );
};
export default Cart;
