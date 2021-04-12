import React from 'react';
import { CardsContextConsumer } from '../../../context/CardContext';
import './BodyHeader.css';
import BtnAddCard from './Button/BtnAddCard';
import BtnDelCard from './Button/BtnDelCard';
import CheckViewOnly from './Button/CheckViewOnly';

class BodyHeader extends React.Component {
    render() {
        return (
            <CardsContextConsumer>
                {(context) => (
                    <>
                        <div className="div-button">
                            <BtnAddCard addCard={context.addCard} />
                            <BtnDelCard deleteCard={context.deleteCard} />
                        </div>
                        <CheckViewOnly
                            changeView={this.props.changeView}
                            viewOnly={this.props.viewOnly}
                            textCheck={this.props.textCheck}
                        />
                    </>
                )}
            </CardsContextConsumer>
        );
    }
}

export default BodyHeader;
