import React from "react";
import { Link } from "react-router-dom";
import axios from "../../../my-axios";
import classes from "./ViewRetail.module.css";

class ViewRetail extends React.Component {
  state = {
    retail: {},
  };
  componentDidMount() {
    axios.get("/retail/" + this.props.match.params.id + ".json").then((res) => {
      let newRetail = { ...this.state.retail };
      let keys = Object.keys(res.data);
      for (let i = 0; i < keys.length; i++) {
        newRetail[keys[i]] = res.data[keys[i]];
      }
      this.setState({ retail: newRetail });
    });
  }
  render() {
    return (
      <div className={classes.ViewRetail} id="retailDetails">
        <Link to={`/viewretail/${this.props.match.params.id}/addbill`} className={classes.Button}>
          Add Bill
        </Link>
        <h1>
          Name:{" "}
          <span className={classes.RetailText}>{this.state.retail.name}</span>
        </h1>
        <h1>
          Owner Name:{" "}
          <span className={classes.RetailText}>{this.state.retail.owner}</span>
        </h1>
        <h1>
          Address:{" "}
          <span className={classes.RetailText}>
            {this.state.retail.address}
          </span>
        </h1>
        <h1>
          Mobile:{" "}
          <span className={classes.RetailText}>{this.state.retail.mobile}</span>
        </h1>
        <h1>
          Total Due:{" "}
          <span className={classes.RetailText}>{this.state.retail.due}</span>
        </h1>
      </div>
    );
  }
}

export default ViewRetail;
