import React from 'react';
import './BodyHeader.css';
import BtnAddCard from './Button/BtnAddCard';
import BtnDelCard from './Button/BtnDelCard';
import CheckViewOnly from './Button/CheckViewOnly';
import { connect } from 'react-redux';
import { onAddCard, onRemoveCards } from '../../../store/actions';

class BodyHeader extends React.Component {
    render() {
        return (
            <>
                <div className="div-button">
                    <BtnAddCard addCard={this.props.onAddCard} />
                    <BtnDelCard deleteCard={this.props.onRemoveCards} />
                </div>
                <CheckViewOnly
                    changeView={this.props.changeView}
                    viewOnly={this.props.viewOnly}
                    textCheck={this.props.textCheck}
                />
            </>
        );
    }
}

const mapDispatchToProps = {
    onAddCard,
    onRemoveCards,
};

export default connect(null, mapDispatchToProps)(BodyHeader);
