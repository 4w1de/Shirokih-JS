import React from 'react';
import ButtonBodyHeader from './ButtonBodyHeader';

import { connect } from 'react-redux';
import { onAddCard, onRemoveCards } from '../../../store/cards/actions';

import './BodyHeader.css';

class BodyHeader extends React.Component {
    render() {
        return (
            <div className="div-body-header">
                {this.props.role === 'Администратор' ? (
                    <ButtonBodyHeader
                        isBtnForCards={false}
                        nameIcon="AiOutlineSetting"
                        title="НАСТРОЙКИ"
                    />
                ) : null}
                <div className="div-button">
                    <ButtonBodyHeader
                        isBtnForCards={true}
                        nameIcon="AiOutlinePlus"
                        title="ДОБАВИТЬ"
                        eventForCards={this.props.onAddCard}
                    />
                    <ButtonBodyHeader
                        isBtnForCards={true}
                        nameIcon="AiOutlineDelete"
                        title="УДАЛИТЬ"
                        eventForCards={this.props.onRemoveCards}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        role: state.auth.role,
    };
};

const mapDispatchToProps = {
    onAddCard,
    onRemoveCards,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyHeader);
