import React from 'react';
import Card from './card';
import axios from 'axios';
import './CardList.css';
import { connect } from 'react-redux';
import {
    onEditCard,
    onChangeMode,
    onChangeCheck,
    onInitCards,
} from '../../../store/actions';
import { withRouter } from 'react-router';

class CardList extends React.Component {
    componentDidMount() {
        if (
            localStorage.getItem('cards') === null ||
            localStorage.getItem('cards') === '[]'
        ) {
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
        } else {
            this.props.onInitCards(JSON.parse(localStorage.getItem('cards')));
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.crds !== this.props.crds) {
            localStorage.setItem('cards', JSON.stringify(this.props.crds));
        }
    }

    doubleClickCard = (id, history) => {
        let cardIndex = this.props.crds.findIndex((card) => card.id === id);
        let card = this.props.crds[cardIndex];
        if (card.editMode === false) history.push({ pathname: '/card' + id });
    };

    render() {
        const { history } = this.props;
        return (
            <div className="div-cards">
                {this.props.crds.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            viewOnly={this.props.viewOnly}
                            changeCheck={() =>
                                this.props.onChangeCheck(card.id)
                            }
                            changeMode={() => this.props.onChangeMode(card.id)}
                            changeText={this.props.onEditCard}
                            onDoubleClick={() =>
                                this.doubleClickCard(card.id, history)
                            }
                        />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { crds: state.cards };
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
