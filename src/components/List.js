import React from "react";
import Task from "./Task";

function List(props) {
    let filteredArr = props.items.filter(item => {
        if (props.sorted === "all") {
          return item;
        } else if (props.sorted === "active" && !item.checked) {
          return item;
        } else if (props.sorted === "completed" && item.checked) {
          return item;
        }
      })
    let listItems = filteredArr.map((task, index) => {
        console.log(task);
        return <Task 
        key={index} 
        task={task} 
        deleteButton={props.deleteButton}
        checkButton={props.checkButton}
        // allButton={props.allButton}
        // activeButton={props.activeButton}
        />
    });
    return (
        <ul>{listItems}</ul>
    );
}

export default List;

// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.tasks = this.props.tasks;
//         this.listItems = tasks.map((task, index) => {
//             // console.log(task);
//             return <Task
//                 key={this.props.index}
//                 task={this.props.task}
//                 deleteButton={this.props.deleteButton}
//                 checkButton={this.props.checkButton}
//             />
//         });
//     }
//     render() {
//         return (
//             <ul>{listItems}</ul>
//         );
//     }
// }

// export default List;