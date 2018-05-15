import React from 'react';

const Button = (props) => {
        return (
            <button
                className={props.styles}
                onClick={props.handleClick}
                type={props.type}
            >
                {props.label}
            </button>
        )
}

export{
    Button
}
