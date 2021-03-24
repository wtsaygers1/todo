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
    };
    // without the .bind(this) nothing is added to the items array
    this.addItem = this.addItem.bind(this);
  }
  addItem(e) {
    // what's up with the underscore infront of inputElement???
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
        // how do I assign the id as the indexed position in the array -- is there a better practice??
        // is that the best practice??
        id: this.state.items.length,
        click: false
      };
      // working with the button
      // completeButton(c) {
      //   if (this.click === false) {
      //     className = "bi bi-circle"
      //   } else {
      //     className = "bi check-circle"
      //   }
      // };

      this.setState((prevState) => {
        return {
          // setState is taking the previous state of items which starts as an empty array and concatenates a
          // new item into the array with each new submission
          items: prevState.items.concat(newItem)
        };
      });
      // inputs start as an empty string so the value can be updated with each new submission
      this._inputElement.value = "";
    }

    // console.log(this.state.items);
    e.preventDefault();
  }

  componentDidUpdate() {
    window.localStorage.setItem("items", JSON.stringify(this.state.items))
  }

  componentDidMount() {
    let items = window.localStorage.getItem("items")

    if (items) {
      this.setState( {items: JSON.parse(items)})
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
              <input type="text" name="name" ref={(a) => this._inputElement = a} placeholder="Input Task!" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <List tasks={this.state.items} />
        </div>
        <div className="BottomBar text-center">
          <BottomBar />
        </div>
      </>
    );
  }
}

export default App;
