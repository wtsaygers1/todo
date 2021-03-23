import React from "react";

function TextBox() {
    return (
        <div className="TextBox">
        <form className="text-center">
            <label>
                <input type="text" name="name" placeholder="Please Input Task!"/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default TextBox;