import React from "react";
import classes from "./BillItemCell.module.css";

const billItemCell = (props) => {
  return (
    <div onClick={props.clicked}>
      <div>{props.item}</div>
      <div>{props.qty}</div>
      <button onClick={props.clicked}>X</button>
    </div>
  );
};

export default billItemCell;
