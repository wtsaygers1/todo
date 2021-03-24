import React from "react";

function Task(props) {
    // className="";

window.localStorage.clear()

    return (
        <li className="border border-dark">
        {/* trying out this onClick inline function to turn click in addItem true in App.js */}
        {/* can try an alert as well to make sure button is firing */}
            <button className="bi bi-circle"></button>
            {props.text}
            <button className="bi bi-x-circle"></button>
        </li>
    );
}

export default Task;