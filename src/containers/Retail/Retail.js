import React from "react";
import { Link } from "react-router-dom";
import classes from "./Retail.module.css";
import axios from "../../my-axios";

class Retail extends React.Component {
  state = {
    retails: [],
    showTable: true,
  };
  add = () => {
    axios.post("/retail.json", {
      name: "Electric Wire",
      owner: "MM Khan",
      address: "Kolkata",
      mobile: "+919034523654",
      due: "12000",
    });
  };
  componentDidMount() {
    axios.get("/retail.json").then((res) => {
      let fetchedRetails = [];
      for (let key in res.data) {
        fetchedRetails.push({
          ...res.data[key],
          id: key,
        });
      }
      this.setState({ retails: fetchedRetails });
    });
  }

  render() {
    let retailData = null;
    retailData = this.state.retails.map((retail, index) => {
      return (
        <tr className={classes.TR} key={retail.id}>
          <td style={{width: "60px"}} className={classes.TDSerial}>{index + 1}</td>
          <td className={classes.TD}>
            <Link to={"/viewretail/" + retail.id}>{retail.name}</Link>
          </td>
          <td className={classes.TD}>{retail.owner}</td>
          <td className={classes.TD}>{retail.address}</td>
          <td className={classes.TD}>{retail.mobile}</td>
          <td className={classes.TDCurrency}>{retail.due}</td>
        </tr>
      );
    });
    return (
      <div className={classes.Retail}>
        {/* <button onClick={this.add}>add</button> */}
        <table className={classes.Table}>
          <thead>
            <tr className={classes.TR}>
              <th className={classes.TH}>Serial No.</th>
              <th className={classes.TH}>Retail Name</th>
              <th className={classes.TH}>Owner</th>
              <th className={classes.TH}>Address</th>
              <th className={classes.TH}>Mobile</th>
              <th className={classes.TH}>Due</th>
            </tr>
          </thead>
          <tbody>{retailData}</tbody>
        </table>
      </div>
    );
  }
}
export default Retail;
// https://retail-bill-7c764-default-rtdb.firebaseio.com/
