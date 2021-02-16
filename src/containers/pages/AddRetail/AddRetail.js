import React from "react";
import axios from "../../../my-axios";
import classes from "./AddRetail.module.css";

class AddRetail extends React.Component {
  state = {
    retail: null,
  };
  addRetailHandler = (e) => {
    if (this.state.retail.name.length !== 0) {
      e.preventDefault();
      axios.post("/retail.json", { ...this.state.retail, due: 12034 });
      this.props.history.push("/");
    }
  };
  inputChangeHandler = (event) => {
    let updatedRetail = { ...this.state.retail };
    updatedRetail["name"] = event.target.value ? event.target.value : "";
    this.setState({ retail: updatedRetail });
  };
  addressChangeHandler = (event) => {
    let updatedRetail = { ...this.state.retail };
    updatedRetail["address"] = event.target.value ? event.target.value : "";
    this.setState({ retail: updatedRetail });
  };
  mobileChangeHandler = (event) => {
    let updatedRetail = { ...this.state.retail };
    updatedRetail["mobile"] = event.target.value ? event.target.value : "";
    this.setState({ retail: updatedRetail });
  };
  ownerChangeHandler = (event) => {
    let updatedRetail = { ...this.state.retail };
    updatedRetail["owner"] = event.target.value ? event.target.value : "";
    this.setState({ retail: updatedRetail });
  };

  render() {
    console.log(this.props.history);
    return (
      <div className={classes.Login}>
        <div style={{ borderBottom: "1px solid #00b8d4" }}>
          <h1 style={{ textAlign: "center" }}>Add New Retailer</h1>
        </div>
        <form action="" className={classes.LoginForm}>
          <label className={classes.Label} htmlFor="name">
            Retail Name
          </label>
          <input
            onChange={(e) => {
              this.inputChangeHandler(e);
            }}
            className={classes.InputIn}
            type="text"
            name="name"
            placeholder="name"
          />
          <label className={classes.Label} htmlFor="address">
            Address
          </label>
          <input
            onChange={(e) => {
              this.addressChangeHandler(e);
            }}
            className={classes.InputIn}
            type="text"
            name="address"
            placeholder="address"
          />
          <label className={classes.Label} htmlFor="mobile">
            Mobile
          </label>
          <input
            onChange={(e) => {
              this.mobileChangeHandler(e);
            }}
            className={classes.InputIn}
            type="text"
            name="mobile"
            placeholder="mobile"
          />
          <label className={classes.Label} htmlFor="owner">
            Owner Name
          </label>
          <input
            onChange={(e) => {
              this.ownerChangeHandler(e);
            }}
            className={classes.InputIn}
            type="text"
            name="owner"
            placeholder="owner"
          />
          <button
            onClick={(e) => {
              this.addRetailHandler(e);
            }}
            className={classes.SubmitButton}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddRetail;
