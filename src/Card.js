import React, {Component} from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={
            cardStyleName: "Div-card",
            captionStyleName: "Caption",
            checked: false
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange() {
        if(!this.state.checked) {
            this.setState({
                cardStyleName: "Div-card-new",
                captionStyleName: "Caption-new",
                checked: true
            })
        }
        else {
            this.setState({
                cardStyleName: "Div-card",
                captionStyleName: "Caption",
                checked: false
            })
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.cardStyleName}>
                    <div className="Div-card-caption">
                        <h1 className={this.state.captionStyleName}>КАРТОЧКА</h1>
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