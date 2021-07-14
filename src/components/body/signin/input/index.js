import React from 'react';

import './Input.css';

function Input(props) {
    let inputElem = null;
    let styleInput = '';
    if (!(props.invalid && props.touched)) styleInput = 'inp-sign';
    else styleInput = 'inp-sign invalid';

    switch (props.elemType) {
        case 'input':
            inputElem = (
                <input
                    {...props.elemConfig}
                    value={props.value}
                    className={styleInput}
                    onChange={props.changed}
                />
            );
            break;
        case 'textarea':
            inputElem = (
                <textarea
                    {...props.elemConfig}
                    value={props.value}
                    className="inp-sign"
                    onChange={props.changed}
                />
            );
            break;
        default:
            inputElem = (
                <input
                    {...props.elemConfig}
                    value={props.value}
                    className="inp-sign"
                    onChange={props.changed}
                />
            );
    }

    return (
        <div>
            <h3>{props.label}</h3>
            {inputElem}
        </div>
    );
}

export default Input;
