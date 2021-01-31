import React from 'react';
import {AiOutlineEdit, AiOutlineCheck, AiOutlineCloseCircle} from 'react-icons/ai'

function CardHeader({title, viewOnly, cardId, editMode, changeCheck, changeMode, changeText, setNewText, newTextHeader, tmpChange, ...props}) {

    function setTextHeader(event) {
        let text = event.target.value;
        props.setState({
            ...props.state,
            newTextHeader: text
        });
    }

    return(
        <div className="cardHeader">
            {!editMode ? (
                <>
                    <h3 className="titleCard">{title}</h3>
                    {viewOnly ? 
                        <div style={{margin: "auto 0", marginLeft: "auto"}} /> 
                    :
                        <AiOutlineEdit 
                            size="30px" 
                            style={{margin: "auto 10px auto 0", marginLeft: "auto"}}
                            onClick={changeMode}
                        />
                    }
                    <input 
                        type="checkbox" 
                        className="checkbox" 
                        style={{margin: "auto 15px"}} 
                        onChange={changeCheck} 
                    />
                </>
            ) : (
                <>
                    <input 
                        className="input" 
                        defaultValue={title}
                        onChange={event => setTextHeader(event)}
                    />
                    <AiOutlineCheck
                        size="30px" 
                        style={{margin: "auto 0", marginLeft: "auto"}} 
                        onClick={tmpChange}
                    />
                    <AiOutlineCloseCircle 
                        size="30px" 
                        style={{margin: "auto 10px"}} 
                        onClick={changeMode}
                    />
                </>
            )}
            
        </div>
    )
}

export default CardHeader;