import React from 'react';

function CardBody({ text, editMode, ...props }) {
    function setTextBody(event) {
        let text = event.target.value;
        props.setState({
            ...props.state,
            newTextBody: text,
        });
    }

    return (
        <div className="cardBody" onDoubleClick={props.onDoubleClick}>
            {!editMode ? (
                <p className="bodyText">{text}</p>
            ) : (
                <textarea defaultValue={text} onChange={setTextBody} />
            )}
        </div>
    );
}

export default CardBody;
