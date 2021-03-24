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
      inputElement: ""
    };
    // without the .bind(this) nothing is added to the items array
    this.addItem = this.addItem.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(e) {
    // what's up with the underscore infront of inputElement???
    if (e.target.value !== "") {
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
    this.setState({inputElement: event.target.value});
  }

  // eventHandler
  deleteButton(key) {
    console.log("clicked the function from app", key)
    const deletedArr = this.state.items.map((item, index) => {
      if (key === item.key) {
        console.log("found the item", item, key);
        item.deleted = true
      }
      return item
    });
    this.setState({ items: deletedArr })
  }
  checkButton() {
    console.log("clicked the function from app")
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
            tasks={this.state.items}
            deleteButton={this.deleteButton}
            checkButton={this.checkButton}
          />
        </div>
        <div className="BottomBar text-center">
          <BottomBar />
        </div>
      </>
    );
  }
}

export default App;
