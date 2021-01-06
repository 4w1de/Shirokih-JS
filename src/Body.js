import React, {Component} from 'react';
import Card from "./Card";
import './Card.css';
import styled from "styled-components";
import Vo from "./vo.png";
import Nvo from "./nvo.png";

const Label = styled.label`
  display: flex;
  margin: 10px 5px 10px;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;
const Checkmark = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border: 2px solid orangered;
  background: url(${props => props.imgCheck ? Vo : Nvo});
  background-size: cover;
  cursor: pointer;
`;

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
                    <Label>
                        <HiddenCheckbox onChange={this.changeView} />
                        <Checkmark imgCheck={this.state.viewOnly} />
                    </Label>
                    <div className="Div-view-edit">{this.state.textCheck}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>{mas}</div>
            </div>
        );
    }
}

export default Body;