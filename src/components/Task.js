import React from "react";

// function Task(props) {


//     return (
//         <li className="border border-dark">
//         {/* trying out this onClick inline function to turn click in addItem true in App.js */}
//         {/* can try an alert as well to make sure button is firing */}
//             <span><button className="btn bi bi-circle" onClick={() => props.checkButton(props.task.key)}></button></span>
//             <span>{props.task.text}</span>
//             <span><button className="btn bi bi-x-circle" onClick={() => props.deleteButton(props.task.key)}></button></span>
//         </li>
//     );
// }

// export default Task;

class Task extends React.Component {

    render() {
        return (
            <div className="border border-dark">
                <div className="row">
                    <li>
                        {/* trying out this onClick inline function to turn click in addItem true in App.js */}
                        {/* can try an alert as well to make sure button is firing */}
                        <button className={this.props.task.checked ? "btn bi bi-check-circle text-decoration-line-through" : "btn bi bi-circle"} onClick={() => this.props.checkButton(this.props.task.key)}></button>
                        <span className={this.props.task.checked ? "text-decoration-line-through" : null}>{this.props.task.text}</span>
                        <button className="btn bi bi-x-circle" onClick={() => this.props.deleteButton(this.props.task.key)}></button>
                    </li>
                </div>
            </div>
        );
    }
}

export default Task;

