import React from "react";
import axios from "../../../my-axios";
import classes from "./AddBill.module.css";

class AddBill extends React.Component {
  state = {
    bill: null,
  };
  render() {
    return <div className={classes.Bill}>
        <h1>Add a new bill</h1>
    </div>;
  }
}

export default AddBill;
