import React, { Component } from "react";
// import React from "react";
import Header from "./Header";
import List from "./List";
import BottomBar from "./BottomBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      inputElement: "",
      sorted: "all"
    };
    // without the .bind(this) nothing is added to the items array
    this.deleteButton = this.deleteButton.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    // this.allButton = this.allButton.bind(this);
    // this.activeButton = this.activeButton.bind(this);
  }

  addItem(e) {
    // what's up with the underscore infront of inputElement???
    if (this.state.inputElement !== "") {
      let newItem = {
        text: this.state.inputElement,
        key: Date.now(),
        // how do I assign the id as the indexed position in the array -- is there a better practice??
        // is that the best practice??
        id: this.state.items.length,
        checked: false,
        deleted: false
      };
      // setState is taking the previous state of items which starts as an empty array and concatenates a
      // new item into the array with each new submission
      this.setState({
        items: this.state.items.concat(newItem),
        inputElement: ""
      });
    }
    // console.log(this.state.items);
    e.preventDefault();
  }

  handleChange(event) {
    this.setState({ inputElement: event.target.value });
  }

  componentDidUpdate() {
    window.localStorage.setItem("items", JSON.stringify(this.state.items))
  }

  componentDidMount() {
    let items = window.localStorage.getItem("items")

    if (items) {
      this.setState({ items: JSON.parse(items) })
    } else {
      window.localStorage.setItem("items", [])
    }
  }

  // eventHandler
  deleteButton(deleted) {
    const deleteItems = this.state.items.filter(item => item.key !== deleted);
    this.setState({ items: deleteItems});
  };

  checkButton(key) {
    // console.log("clicked the function from app", key)
    const checkedArr = this.state.items.map((item, index) => {
      if (key === item.key) {
        // console.log("found the item", item, key);
        item.checked = !item.checked;
      }
      return item
    });
    this.setState({ items: checkedArr })
  }

//   activeButton(key) {
//     const activeArr = this.state.items.map((item, index) => {
//       if (key === item.key) {
//         item.checked = item.checked
//       }
//       return item
//     });
//     this.setState({ items: activeArr })
//   }

  // allButton(key) {
  //   const allArr = this.state.items.filter((item, index) => {
  //     if (key === item.key) {
  //       // is something needed??
  //     }
  //     return item
  //   });
  //   this.setState({ items: allArr })
  // }

//  clearComButton() {

//  }


  numLeft() {
    if (this.state.items.length === 1) {
      return `${this.state.items.length} item left`;
    } else {
      return `${this.state.items.length} items left`;
    }
  }

  render() {

    return (
      <>
        <div className="Header">
          <Header />
        </div>
        <div className="TextBox">
          {/* every time there is a new submission, the addItem method will run */}
          <form className="text-center" onSubmit={this.addItem}>
            <label>
              <input type="text" name="name" value={this.state.inputElement} onChange={this.handleChange} placeholder="Input Task!" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <List
            items={this.state.items}
            deleteButton={this.deleteButton}
            checkButton={this.checkButton}
            sorted={this.state.sorted}
          />
        </div>
        <div className="BottomBar text-center">
          <BottomBar />
        </div>
        <div className="text-center">
          <p>{this.numLeft()}</p>
        </div>
      </>
    );
  }
}

export default App;
