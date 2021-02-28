import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import './Card.css';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';

function Card({
    card,
    viewOnly,
    changeCheck,
    changeMode,
    changeText,
    setNewText,
    ...props
}) {
    var [state, setState] = useState({
        newTextHeader: card.title,
        newTextBody: card.text,
    });

    const tmpChange = () => {
        changeText(card.id, state.newTextHeader, state.newTextBody);
    };
    const tmpChangeMode = () => {
        setState({
            newTextHeader: card.title,
            newTextBody: card.text,
        });
        changeMode();
    };

    return (
        <div className={card.checked ? 'divCard' : 'divCard new'}>
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
            <hr />
            <CardBody
                text={card.text}
                state={state}
                setState={setState}
                editMode={card.editMode}
            />
        </div>
    );
}

export default withLoadingDelay(Card);
