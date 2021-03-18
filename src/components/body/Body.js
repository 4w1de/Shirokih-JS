import React from 'react';
import CardList from './cards/CardList';
import BodyHeader from './body-header/BodyHeader';
import './Body.css';
//import { CardContext } from '../../context/CardContext';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            viewOnly: false,
            textCheck: 'ПРОСМОТР И РЕДАКТИРОВАНИЕ',
        };
        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.setState({
            viewOnly: !this.state.viewOnly,
            textCheck: !this.state.viewOnly
                ? 'ТОЛЬКО ПРОСМОТР'
                : 'ПРОСМОТР И РЕДАКТИРОВАНИЕ',
        });
        this.props.changeModeView();
    }

    render() {
        return (
            //<CardContext viewOnly={this.state.viewOnly}>
            <div className="divBody">
                <BodyHeader
                    changeView={this.changeView}
                    viewOnly={this.state.viewOnly}
                    textCheck={this.state.textCheck}
                />
                <CardList viewOnly={this.state.viewOnly} />
            </div>
            //</CardContext>
        );
    }
}

export default Body;
