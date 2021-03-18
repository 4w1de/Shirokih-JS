import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const { Provider, Consumer } = React.createContext();

class CardContext extends React.Component {
    constructor() {
        super();

        this.state = {
            cards: [
                {
                    id: 0,
                    title: 'Карточка 0',
                    text: 'Текст карточки 0',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 1,
                    title: 'Карточка 1',
                    text: 'Текст карточки 1',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 2,
                    title: 'Карточка 2',
                    text: 'Текст карточки 2',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 3,
                    title: 'Карточка 3',
                    text: 'Текст карточки 3',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 4,
                    title: 'Карточка 4',
                    text: 'Текст карточки 4',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 5,
                    title: 'Карточка 5',
                    text: 'Текст карточки 5',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 6,
                    title: 'Карточка 6',
                    text: 'Текст карточки 6',
                    checked: false,
                    editMode: false,
                },
            ],
        };
        this.changeCheck = this.changeCheck.bind(this);
        this.changeMode = this.changeMode.bind(this);
        this.changeText = this.changeText.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
        this.addCard = this.addCard.bind(this);
        this.changeModeView = this.changeModeView.bind(this);
    }

    /*static getDerivedStateFromProps(props, state) {
        if (props.viewOnly !== false) {
            console.log(state.cards.length);
            const arr = state.cards.map((item) => ({ ...item }));
            var tmp = 0;
            while (tmp < state.cards.length) {
                if (arr[tmp] != null) arr[tmp].editMode = false;
                tmp++;
            }
            return {
                cards: arr,
            };
        }
        return null;
    }*/

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
        //this.setState(() => ({ countCard: this.state.cards.length }));
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
