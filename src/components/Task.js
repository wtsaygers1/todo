import React from "react";

function Task(props) {

    return (
        <li className="border border-dark">
        {/* trying out this onClick inline function to turn click in addItem true in App.js */}
        {/* can try an alert as well to make sure button is firing */}
            <button className="btn bi bi-circle" onClick={props.checkButton}></button>
            {props.task.text}
            <button className="btn bi bi-x-circle" onClick={() => props.deleteButton(props.task.key)}></button>
        </li>
    );
}

export default Task;