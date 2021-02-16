import React from "react";
import { Link } from "react-router-dom";
import classes from "./Landing.module.css";
import Retails from "../../Retail/Retail";
const landing = (props) => {
  return (
    <div className={classes.Landing}>
      <div>
        <Link to="/addretail" className={classes.Button}>Add New Retail</Link>
      </div>
      <div className={classes.RetailView}>
        <Retails />
      </div>
    </div>
  );
};
export default landing;
