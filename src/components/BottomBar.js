import React from "react";

function BottomBar(props) {
    return (
        // need to link these like I did in Task.js
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-outline-primary" onClick={() => props.bottomButton("all")}>All</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => props.bottomButton("active")}>Active</button>
            <button type="button" className="btn btn-outline-primary" onClick={() => props.bottomButton("completed")}>Completed</button>
            <button type="button" className="btn btn-outline-primary">Clear Completed</button>
        </div>
            );
        }
        // <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
        //     <button type="button" className="btn btn-outline-primary" onClick={() => this.props.allButton(this.props.task.key)}>All</button>
        //     <button type="button" className="btn btn-outline-primary" onClick={() => this.props.activeButton(this.props.task.key)}>Active</button>
        //     <button type="button" className="btn btn-outline-primary" onClick={() => this.props.checkButton(this.props.task.key)}>Completed</button>
        //     <button type="button" className="btn btn-outline-primary">Clear Completed</button>
        // </div> 
        


export default BottomBar;