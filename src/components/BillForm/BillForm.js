import React from "react";
import BillItemCell from "./BillItemCell/BillItemCell";
import classes from "./BillForm.module.css";
class BillForm extends React.Component {
  state = {
    texts: [],
    inText1: "",
    inText2: "",
  };
  onTextChange1 = (e) => {
    this.setState({ inText1: e.target.value });
  };
  onTextChange2 = (e) => {
    this.setState({ inText2: e.target.value });
  };
  addCellHandler = () => {
    if (this.state.inText1 && this.state.inText2) {
      let newObj = { txt1: this.state.inText1, txt2: this.state.inText2 };
      this.setState({
        texts: [...this.state.texts, newObj],
        inText1: "",
        inText2: "",
      });
    }
  };
  cellDeleteHandler = (id) => {
    let texts = this.state.texts;
    delete texts[id];
    this.setState({ texts: texts });
    // console.log(id)
  };
  render() {
    return (
      <div className={classes.BillForm}>
        {this.state.texts.length > 0
          ? this.state.texts.map((cell, index) => {
              return (
                <BillItemCell
                  item={cell.txt1}
                  qty={cell.txt2}
                  key={index}
                  clicked={() => this.cellDeleteHandler(index)}
                />
              );
            })
          : null}
        <input
          value={this.state.inText1}
          onChange={(e) => this.onTextChange1(e)}
          type="text"
          placeholder="Item descriptions"
        ></input>
        <input
          value={this.state.inText2}
          onChange={(e) => this.onTextChange2(e)}
          type="text"
          placeholder="Item quantity"
        ></input>
        <button onClick={this.addCellHandler}>Add</button>
      </div>
    );
  }
}

export default BillForm;
