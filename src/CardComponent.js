import React from 'react';
import './CardStyle.css'

function CardComponent(props) {
    return (
        <div>
            <div className="Div-card">
                <div className="Div-card-caption">
                    <h1>КАРТОЧКА</h1>
                </div>
                <hr />
                <div className="Div-card-text">
                    <p>Здесь должен быть какой-то текст, но вместо него здесь смайлик ^w^</p>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;