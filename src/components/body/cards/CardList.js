import React from 'react';
import Card from './card/Card';
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import './CardList.css';
import { v4 as uuidv4 } from 'uuid';

class CardList extends React.Component {
    constructor() {
        super();
        this.state = {
            cardsCount: 0,
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
                {
                    id: 7,
                    title: 'Карточка 7',
                    text: 'Текст карточки 7',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 8,
                    title: 'Карточка 8',
                    text: 'Текст карточки 8',
                    checked: false,
                    editMode: false,
                },
                {
                    id: 9,
                    title: 'Карточка 9',
                    text: 'Текст карточки 9',
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
    }

    static getDerivedStateFromProps(props, state) {
        if (props.viewOnly !== false) {
            const arr = state.cards.map((item) => ({ ...item }));
            var tmp = 0;
            while (tmp < 10) {
                if (arr[tmp] != null) arr[tmp].editMode = false;
                tmp++;
            }
            return {
                cards: arr,
            };
        }
        return null;
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

    changeText(id, newTitle, newText) {
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
    }

    deleteCard() {
        this.setState((prevState) => ({
            cards: prevState.cards.filter((card) => card.checked !== true),
        }));
    }
    addCard() {
        this.setState({
            cardsCount: this.state.cardsCount + 1,
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
    }

    render() {
        return (
            <>
                <div className="divButton">
                    <label className="labelDel" onClick={this.addCard}>
                        <AiOutlinePlus
                            size="50px"
                            color="white"
                            style={{ margin: 'auto 0' }}
                        />
                        <h2>ДОБАВИТЬ</h2>
                    </label>
                    <label className="labelDel" onClick={this.deleteCard}>
                        <AiOutlineDelete
                            size="50px"
                            color="white"
                            style={{ margin: 'auto 0' }}
                        />
                        <h2>УДАЛИТЬ</h2>
                    </label>
                </div>
                <div className="divCards">
                    {this.state.cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card}
                            viewOnly={this.props.viewOnly}
                            changeCheck={() => this.changeCheck(card.id)}
                            changeMode={() => this.changeMode(card.id)}
                            changeText={this.changeText}
                            setNewText={this.setNewText}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default CardList;
