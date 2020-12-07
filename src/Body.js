import React, {Component} from 'react';
import Card from "./Card";
import './Card.css';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state={
            viewOnly: false,
            textCheck: "ПРОСМОТР И РЕДАКТИРОВАНИЕ"
        };
        this.changeView=this.changeView.bind(this);

    }

    changeView() {
        this.setState({
            viewOnly: !this.state.viewOnly,
            textCheck: !this.state.viewOnly ? "ТОЛЬКО ПРОСМОТР" : "ПРОСМОТР И РЕДАКТИРОВАНИЕ"
        })
    }
    render() {
        let mas = [];
        for(let i=0; i<7; i++) {
            mas.push(<Card key={i} valueView={this.state.viewOnly} />);
        }
        return (
            <div>
                <div className="Div-check">
                    <label className="Label-check">
                        <input type="checkbox" className="Input-check" onChange={this.changeView} />
                        <div className="Checkmark-app" />
                    </label>
                    <div className="Div-view-edit">{this.state.textCheck}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>{mas}</div>
            </div>
        );
    }
}

export default Body;