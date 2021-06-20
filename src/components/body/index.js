import React from 'react';
import CardList from './cards';
import BodyHeader from './body-header';
import './Body.css';
import { connect } from 'react-redux';
import { onChangeModeView } from '../../store/actions';

class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            viewOnly: false,
            textCheck: 'ПРОСМОТР И РЕДАКТИРОВАНИЕ',
        };
        this.changeView = this.changeView.bind(this);
    }

    changeView(cmv) {
        this.setState({
            viewOnly: !this.state.viewOnly,
            textCheck: !this.state.viewOnly
                ? 'ТОЛЬКО ПРОСМОТР'
                : 'ПРОСМОТР И РЕДАКТИРОВАНИЕ',
        });
        this.props.onChangeModeView(true);
    }

    render() {
        return (
            <div className="divBody">
                <BodyHeader
                    changeView={this.changeView}
                    viewOnly={this.state.viewOnly}
                    textCheck={this.state.textCheck}
                />
                <CardList viewOnly={this.state.viewOnly} />
            </div>
        );
    }
}

const mapDispatchToProps = {
    onChangeModeView,
};

export default connect(null, mapDispatchToProps)(Body);
