import React from 'react';
import Card from '../cards/card';

import { connect } from 'react-redux';
import {
    onEditCard,
    onChangeMode,
    onChangeCheck,
} from '../../../store/cards/actions';

import '../cards/CardList.css';
import '../Body.css';

class CardPage extends React.Component {
    render() {
        const cardIndex = this.props.cards.findIndex((card) => {
            return card.id === this.props.match.params.id;
        });
        const card = this.props.cards[cardIndex];
        return (
            <div className="divBody">
                <div className="div-cards-page">
                    <Card
                        key={card.id}
                        card={card}
                        changeCheck={() => this.props.onChangeCheck(card.id)}
                        changeMode={() => this.props.onChangeMode(card.id)}
                        changeText={this.props.onEditCard}
                        viewOnly={this.props.viewOnly}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { cards: state.cards.cards, viewOnly: state.cards.viewOnly };
};

const mapDispatchToProps = {
    onEditCard,
    onChangeMode,
    onChangeCheck,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
