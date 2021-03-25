import React from "react";
import Task from "./Task";

function List(props) {
    let tasks = props.tasks;
    let listItems = tasks.map((task, index) => {
        console.log(task);
        return <Task 
        key={index} 
        task={task} 
        deleteButton={props.deleteButton}
        checkButton={props.checkButton}
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