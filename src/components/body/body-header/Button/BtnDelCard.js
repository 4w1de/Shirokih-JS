import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function BtnDelCard(props) {
    return (
        <label className="label-btn" onClick={props.deleteCard}>
            <AiOutlineDelete size="50px" style={{ margin: 'auto 0' }} />
            <h2>УДАЛИТЬ</h2>
        </label>
    );
}

export default BtnDelCard;
