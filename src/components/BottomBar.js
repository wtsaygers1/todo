import React from "react";

function BottomBar() {
    return (
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic outlined example">
            <p># items left</p>
            <button type="button" className="btn btn-outline-primary">All</button>
            <button type="button" className="btn btn-outline-primary">Active</button>
            <button type="button" className="btn btn-outline-primary">Completed</button>
            <button type="button" className="btn btn-outline-primary">Clear Completed</button>
        </div>
    );

}

export default BottomBar;