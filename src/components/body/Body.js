import React from 'react';
import CardList from './cards/CardList';
import styled from 'styled-components';
import Vo from '../../img/vo.png';
import Nvo from '../../img/nvo.png';
import './Body.css';

const Label = styled.label`
    display: flex;
    margin: 20px 5px 10px;
    height: 50px;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;
const Checkmark = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    border: 2px solid orangered;
    background: url(${(props) => (props.imgCheck ? Vo : Nvo)});
    background-size: cover;
    background-color: rgba(201, 25, 25, 0.39);
    border: 2px solid black;
    cursor: pointer;
    margin: auto 10px;
`;
const TextViewObly = styled.h2`
    color: white;
    margin: auto 0;
    font-weight: bolder;
`;

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
    }

    render() {
        return (
            <div className="divBody">
                <div>
                    <Label>
                        <HiddenCheckbox onChange={this.changeView} />
                        <Checkmark imgCheck={this.state.viewOnly} />
                        <TextViewObly>{this.state.textCheck}</TextViewObly>
                    </Label>
                </div>
                <CardList viewOnly={this.state.viewOnly} />
            </div>
        );
    }
}

export default Body;
