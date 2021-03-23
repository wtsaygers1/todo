import React from "react";
import Task from "./Task";

function List(props) {
    let tasks = props.tasks;
    let listItems = tasks.map((task, index) => {
        console.log(task);
        return <Task key={index} text={task.text} />
    }
    );
    return (

        <ul>{listItems}</ul>
    );
}

export default List;