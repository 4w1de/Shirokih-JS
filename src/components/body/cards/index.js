import React from 'react';
import Card from './card';
import './CardList.css';
import { CardsContextConsumer } from './../../../context/CardContext';

class CardList extends React.Component {
    render() {
        return (
            <CardsContextConsumer>
                {(context) => (
                    <div className="div-cards">
                        {context.cards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                viewOnly={this.props.viewOnly}
                                changeCheck={() => context.changeCheck(card.id)}
                                changeMode={() => context.changeMode(card.id)}
                                changeText={context.changeText}
                                setNewText={context.setNewText}
                            />
                        ))}
                    </div>
                )}
            </CardsContextConsumer>
        );
    }
}

export default CardList;
