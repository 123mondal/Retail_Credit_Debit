import React from "react";
// import classes from "./Main.module.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Landing from "../pages/Landing/Landing";
import AddRetail from "../pages/AddRetail/AddRetail";
import About from "../pages/about/About";
import ViewRetail from "../pages/ViewRetail/ViewRetail";
import AddBill from "../pages/AddBill/AddBill";

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact component={Landing}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/addRetail" exact component={AddRetail}></Route>
            <Route path="/viewretail/:id" exact component={ViewRetail}></Route>
            <Route path="/viewretail/:id/addbill" exact component={AddBill}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
