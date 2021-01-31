import React, {useState} from 'react';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';

function Card({card, viewOnly, changeCheck, changeMode, changeText, setNewText, ...props}) {
    
    var [state, setState] = useState({newTextHeader: card.title, newTextBody: card.text});

    const tmpChange = () => {
        changeText(card.id, state.newTextHeader, state.newTextBody);
    }
    const tmpChangeMode = () => {
        setState({
            newTextHeader: card.title, 
            newTextBody: card.text
        });
        changeMode();
    }

    return(
        <div className={card.checked ? "divCard" : "divCard new"}>
            <CardHeader
                title={card.title}
                viewOnly={viewOnly}
                cardId={card.id}
                state={state}
                setState={setState}
                editMode={card.editMode}
                changeCheck={changeCheck}
                changeMode={tmpChangeMode}
                changeText={changeText}
                tmpChange={tmpChange}
            />
            <hr style={{width: 380, margin: "0 auto"}} />
            <CardBody
                text={card.text}
                state={state}
                setState={setState}
                editMode={card.editMode}
            />
        </div>
    )
}

export default Card;