import React from "react";

const Button = (props) => {
    return(
        <a href="#6">
            <button className={props.btnClass} id={props.btnId}>
                {props.btnContent}
            </button>
        </a>
    )
}

export default Button;