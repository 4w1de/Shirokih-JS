import React from 'react';

import { Badge, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class CounterCards extends React.Component {
    render() {
        return (
            <h6>
                <Button variant="light">
                    Cards <Badge variant="light">{this.props.cardsCount}</Badge>
                </Button>
            </h6>
        );
    }
}

const mapStateToProps = (state) => {
    return { cardsCount: state.cards.cards.length };
};

export default connect(mapStateToProps)(CounterCards);
