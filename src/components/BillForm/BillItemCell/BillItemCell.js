import React from "react";
import classes from "./BillItemCell.module.css";

const billItemCell = (props) => {
  return (
    <div className={classes.BillCell}>
      <div className={classes.BillItem}>{props.srl}</div>
      <input type="text" placeholder="Item Name" className={classes.BillItem} />
      <input type="text" placeholder="Item Qty" className={classes.BillItem} />
      <button className={classes.BillCellEditBtn} onClick={props.editClicked}>
        edit
      </button>
      <button className={classes.BillCellDelBtn} onClick={props.clicked}>
        delete
      </button>
    </div>
  );
};

export default billItemCell;
