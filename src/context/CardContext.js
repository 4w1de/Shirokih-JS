import axios from 'axios';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const { Provider, Consumer } = React.createContext();

class CardContext extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: [],
        };
        this.changeCheck = this.changeCheck.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.changeText = this.changeText.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.changeModeView = this.changeModeView.bind(this);
    }

    componentDidMount() {
        axios
            .get(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json',
            )
            .then((res) => {
                this.setState({
                    cards: res.data.slice(0, 15).map((data) => {
                        return {
                            id: data.Number,
                            title: data.Name,
                            text: data.About,
                            checked: false,
                            editMode: false,
                        };
                    }),
                });
            });
    }

    changeCheck = (id) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        checked: !card.checked,
                    };
                }
                return card;
            }),
        });
    };

    changeMode = (id) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        checked: false,
                        editMode: !card.editMode,
                    };
                }
                return card;
            }),
        });
    };

    changeModeView = () => {
        this.setState({
            cards: this.state.cards.map((card) => {
                return {
                    ...card,
                    editMode: false,
                };
            }),
        });
    };

    changeText = (id, newTitle, newText) => {
        this.setState({
            cards: this.state.cards.map((card) => {
                if (card.id === id) {
                    return {
                        ...card,
                        title: newTitle,
                        text: newText,
                        checked: false,
                        editMode: false,
                    };
                }
                return card;
            }),
        });
    };

    deleteCard = () => {
        this.setState((prevState) => ({
            cards: prevState.cards.filter((card) => card.checked !== true),
        }));
    };
    addCard = () => {
        this.setState({
            cards: [
                ...this.state.cards,
                {
                    id: uuidv4(),
                    title: '',
                    text: '',
                    checked: false,
                    editMode: false,
                },
            ],
        });
    };

    render() {
        return (
            <Provider
                value={{
                    cards: this.state.cards,
                    cardsCount: this.state.cards.length,
                    changeCheck: this.changeCheck,
                    changeMode: this.changeMode,
                    changeText: this.changeText,
                    deleteCard: this.deleteCard,
                    addCard: this.addCard,
                    changeModeView: this.changeModeView,
                }}>
                {this.props.children}
            </Provider>
        );
    }
}

export { CardContext, Consumer as CardsContextConsumer };
