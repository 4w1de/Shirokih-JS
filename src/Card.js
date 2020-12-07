import React, {Component} from 'react'
import { GrEdit, GrFormCheckmark, GrFormClose } from "react-icons/gr"
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={
            textHeader: "КАРТОЧКА",
            textCard: "Здесь должен быть какой-то текст, но вместо него здесь смайлик ^w^",
            checked: false,
            editMode: false
        };
        this.handleChange=this.handleChange.bind(this);
        this.changeMode=this.changeMode.bind(this);
        this.changeText=this.changeText.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        if (props.valueView !== false) {
            return {
                editMode: false
            };
        }
        return null;
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }
    changeMode() {
        this.setState({
            editMode: !this.state.editMode,
            checked: false
        })
    }
    changeText() {
        this.setState({
            textHeader: this.newTextHeader.value,
            textCard: this.newTextCard.value,
            editMode: false
        })
    }

    render() {
        return (
            this.props.valueView ? (
               <div>
                   <div className={this.state.checked ? 'Div-card-new' : 'Div-card'}>
                       <div className="Div-card-caption">
                           <h1 className={this.state.checked ? 'Caption-new' : 'Caption'}>{this.state.textHeader}</h1>
                           <div style={{width: "36px"}}/>
                           <label className="Label-check">
                               <input type="checkbox" className="Input-check" onChange={this.handleChange}/>
                               <div className="Checkmark"/>
                           </label>
                       </div>
                       <hr/>
                       <div className="Div-card-text">
                           <p>{this.state.textCard}</p>
                       </div>
                    </div>
               </div>
            ) : (
                this.state.editMode ? (
                    <div>
                        <div className="Div-card">
                            <div className="Div-card-caption">
                                <input
                                    type="text"
                                    className="editHeader"
                                    defaultValue={this.state.textHeader}
                                    ref={(ref) => {
                                        this.newTextHeader = ref;
                                    }}
                                />
                                <GrFormCheckmark
                                    size="40px"
                                    style={{margin: "5px 0 0", cursor: "pointer"}}
                                    onClick={this.changeText}
                                />
                                <GrFormClose
                                    size="40px"
                                    style={{margin: "5px 0 0", cursor: "pointer"}}
                                    onClick={this.changeMode}
                                />
                            </div>
                            <hr/>
                            <div className="Div-card-text">
                                    <textarea value={this.props.textCard} defaultValue={this.state.textCard} ref={(ref) => {
                                        this.newTextCard = ref;
                                    }} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className={this.state.checked ? 'Div-card-new' : 'Div-card'}>
                            <div className="Div-card-caption">
                                <h1 className={this.state.checked ? 'Caption-new' : 'Caption'}>{this.state.textHeader}</h1>
                                {!this.props.valueView ? (
                                    <GrEdit
                                        size="26px"
                                        style={{margin: "10px 5px 10px", cursor: "pointer"}}
                                        onClick={this.changeMode}
                                    />
                                ) : (<div style={{width: "36px"}}/>)}
                                <label className="Label-check">
                                    <input type="checkbox" className="Input-check" onChange={this.handleChange}/>
                                    <div className="Checkmark"/>
                                </label>
                            </div>
                            <hr/>
                            <div className="Div-card-text">
                                <p>{this.state.textCard}</p>
                            </div>
                        </div>
                    </div>
                )
            )
        )
    }
}

export default Card;