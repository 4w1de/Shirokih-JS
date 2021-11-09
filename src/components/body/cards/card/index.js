import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

import PropTypes from 'prop-types';
import withLoadingDelay from '../../../../hoc/withLoadingDelay';

import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.titleRef = React.createRef();
        this.textRef = React.createRef();
        this.changeMode = this.changeMode.bind(this);
        this.changeText = this.changeText.bind(this);
    }

    changeMode() {
        this.props.changeMode();
    }

    changeText() {
        let newTitle = this.titleRef.current.value;
        let newText = this.textRef.current.value;
        this.props.changeText(this.props.card.id, newTitle, newText);
    }

    render() {
        return (
            <div
                className={this.props.card.checked ? 'divCard' : 'divCard new'}>
                <CardHeader
                    cardID={this.props.card.id}
                    titleRef={this.titleRef}
                    title={this.props.card.title}
                    editMode={this.props.card.editMode}
                    changeCheck={this.props.changeCheck}
                    changeMode={this.changeMode}
                    checked={this.props.card.checked}
                    onDoubleClick={this.props.onDoubleClick}
                    viewOnly={this.props.viewOnly}
                    changeText={this.changeText}
                />
                <hr />
                <CardBody
                    textRef={this.textRef}
                    text={this.props.card.text}
                    editMode={this.props.card.editMode}
                    onDoubleClick={this.props.onDoubleClick}
                />
            </div>
        );
    }
}

Card.propTypes = {
    card: PropTypes.object,
    changeCheck: PropTypes.func,
    changeMode: PropTypes.func,
    changeText: PropTypes.func,
};

//export default withLoadingDelay(Card);
export default Card;
