import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function BtnAddCard(props) {
    return (
        <label className="labelBtn" onClick={props.addCard}>
            <AiOutlinePlus
                size="50px"
                color="white"
                style={{ margin: 'auto 0' }}
            />
            <h2>ДОБАВИТЬ</h2>
        </label>
    );
}

export default BtnAddCard;
