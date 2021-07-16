import React, { useState } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

import PropTypes from 'prop-types';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';

import './Card.css';

function Card({ card, changeCheck, changeMode, changeText, ...props }) {
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
                viewOnly={props.viewOnly}
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
    changeCheck: PropTypes.func,
    changeMode: PropTypes.func,
    changeText: PropTypes.func,
};

export default withLoadingDelay(Card);
