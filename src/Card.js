import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={
            checked: false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <div>
                <div className={this.state.checked ? 'Div-card-new' : 'Div-card'}>
                    <div className="Div-card-caption">
                        <h1 className={this.state.checked ? 'Caption-new' : 'Caption'}>КАРТОЧКА</h1>
                        <label>
                            <input type="checkbox" onChange={this.handleChange} />
                            <div className="Checkmark" />
                        </label>
                    </div>
                    <hr />
                    <div className="Div-card-text">
                        <p>Здесь должен быть какой-то текст, но вместо него здесь смайлик ^w^</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;