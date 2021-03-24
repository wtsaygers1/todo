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