import React from 'react';
import {
    AiOutlineEdit,
    AiOutlineCheck,
    AiOutlineCloseCircle,
} from 'react-icons/ai';

function CardHeader({
    title,
    viewOnly,
    cardId,
    editMode,
    changeCheck,
    changeMode,
    changeText,
    setNewText,
    newTextHeader,
    tmpChange,
    ...props
}) {
    function setTextHeader(event) {
        let text = event.target.value;
        props.setState({
            ...props.state,
            newTextHeader: text,
        });
    }

    return (
        <div className="cardHeader" onDoubleClick={props.onDoubleClick}>
            {!editMode ? (
                <>
                    <h2>{title}</h2>
                    {viewOnly ? (
                        <div className="divEmpty" />
                    ) : (
                        <AiOutlineEdit
                            size="30px"
                            style={{
                                margin: 'auto 10px auto 0',
                                marginLeft: 'auto',
                            }}
                            onClick={changeMode}
                        />
                    )}
                    <input
                        type="checkbox"
                        className="checkbox"
                        onChange={changeCheck}
                        checked={props.checked}
                    />
                </>
            ) : (
                <>
                    <input
                        className="input"
                        defaultValue={title}
                        onChange={setTextHeader}
                    />
                    <div style={{ margin: 'auto -10px auto auto' }}>
                        <AiOutlineCheck
                            size="30px"
                            style={{ marginRight: 10 }}
                            onClick={tmpChange}
                        />
                        <AiOutlineCloseCircle
                            size="30px"
                            onClick={changeMode}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default CardHeader;
