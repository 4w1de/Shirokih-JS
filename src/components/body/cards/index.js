import React from 'react';
import Card from './card';

import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
    onEditCard,
    onChangeMode,
    onChangeCheck,
    onInitCards,
} from '../../../store/cards/actions';

import './CardList.css';

class CardList extends React.Component {
    componentDidMount() {
        if (this.props.cards.length === 0)
            axios
                .get(
                    'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
                )
                .then((response) => {
                    const cards = response.data.slice(0, 15).map((data) => {
                        return {
                            id: data.Number,
                            title: data.Name,
                            text: data.About,
                            checked: false,
                            editMode: false,
                        };
                    });
                    this.props.onInitCards(cards);
                });
    }

    doubleClickCard = (id, history) => {
        let cardIndex = this.props.cards.findIndex((card) => card.id === id);
        let card = this.props.cards[cardIndex];
        if (card.editMode === false) history.push({ pathname: '/card' + id });
    };

    render() {
        const { history } = this.props;
        return (
            <div className="div-cards">
                {this.props.cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            changeCheck={() =>
                                this.props.onChangeCheck(card.id)
                            }
                            changeMode={() => this.props.onChangeMode(card.id)}
                            changeText={this.props.onEditCard}
                            onDoubleClick={() =>
                                this.doubleClickCard(card.id, history)
                            }
                            viewOnly={this.props.viewOnly}
                        />
                    );
                })}
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
    onInitCards,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(CardList));
