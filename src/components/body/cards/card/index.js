import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import './Card.css';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';
import PropTypes from 'prop-types';

function Card({
    card,
    viewOnly,
    changeCheck,
    changeMode,
    changeText,
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
                checked={card.checked}
                onDoubleClick={props.onDoubleClick}
            />
            <hr />
            <CardBody
                text={card.text}
                state={state}
                setState={setState}
                editMode={card.editMode}
                onDoubleClick={props.onDoubleClick}
            />
        </div>
    );
}

Card.propTypes = {
    card: PropTypes.object,
    viewOnly: PropTypes.bool,
    changeCheck: PropTypes.func,
    changeMode: PropTypes.func,
    changeText: PropTypes.func,
};

export default withLoadingDelay(Card);
