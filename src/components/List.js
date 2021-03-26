import React from "react";
import Task from "./Task";

function List(props) {
    let filteredArr = props.items.filter(item => {
        if (!item.deleted) {
            if (props.sorted === "all") {
                return item;
            } else if (props.sorted === "active" && !item.checked) {
                return item;
            } else if (props.sorted === "completed" && item.checked) {
                return item;
            }
        }
    })
    let listItems = filteredArr.map((task, index) => {
        // console.log(task);
        return <Task
            key={index}
            task={task}
            deleteButton={props.deleteButton}
            checkButton={props.checkButton}
            bottomButton={props.bottomButton}
            clearCompleted={props.clearCompleted}
        />
    });
    return (
        <ul>{listItems}</ul>
    );
}

export default List;