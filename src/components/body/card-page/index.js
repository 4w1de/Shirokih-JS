import React from 'react';
import '../cards/CardList.css';
import '../Body.css';
import { connect } from 'react-redux';
import Card from '../cards/card';
import {
    onEditCard,
    onChangeMode,
    onChangeCheck,
} from '../../../store/actions';

class CardPage extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.crds !== this.props.crds) {
            localStorage.setItem('cards', JSON.stringify(this.props.crds));
        }
    }

    render() {
        const cardIndex = this.props.crds.findIndex((card) => {
            return card.id === this.props.match.params.id;
        });
        const card = this.props.crds[cardIndex];
        return (
            <div className="divBody">
                <div className="div-cards">
                    <Card
                        key={card.id}
                        card={card}
                        changeCheck={() => this.props.onChangeCheck(card.id)}
                        changeMode={() => this.props.onChangeMode(card.id)}
                        changeText={this.props.onEditCard}
                    />
                </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
