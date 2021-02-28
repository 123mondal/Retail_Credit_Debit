import React from "react";
import BillItemCell from "./BillItemCell/BillItemCell";
import classes from "./BillForm.module.css";
class BillForm extends React.Component {
  state = {
    texts: [],
  };

  addCellHandler = (e) => {
    e.preventDefault();
    let texts = this.state.texts;
    let newObj = {id: new Date(), type: "cellItem"};
    texts.push(newObj);
    this.setState({
      texts: texts,
    });
  };
  cellDeleteHandler = (id) => {
    let texts = this.state.texts.filter(item => item.id !== id);
    // let texts = Array.from(this.state.texts);
    // texts.splice(id, 1);
    this.setState({ texts: texts });
    console.log(id + " Deleted");
  };
  cellEditHandler = (id) => {
    console.log(id + 1);
    // console.log(id)
  };
  render() {
    return (
      <div className={classes.BillForm}>
        <button
          className={classes.AddCellBtn}
          onClick={(e) => this.addCellHandler(e)}
        >
          Add Item
        </button>

        {this.state.texts.length > 0
          ? this.state.texts.map((cell, index) => {
              return (
                <BillItemCell
                  srl={index + 1}
                  key={index}
                  editClicked={() => this.cellEditHandler(index)}
                  clicked={() => this.cellDeleteHandler(cell.id)}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default BillForm;
