import React from 'react';
import styled from 'styled-components';
import Vo from '../../../../img/vo.png';
import Nvo from '../../../../img/nvo.png';

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

class CheckViewOnly extends React.Component {
    render() {
        return (
            <div>
                <Label>
                    <HiddenCheckbox onChange={this.props.changeView} />
                    <Checkmark imgCheck={this.props.viewOnly} />
                    <TextViewObly>{this.props.textCheck}</TextViewObly>
                </Label>
            </div>
        );
    }
}

export default CheckViewOnly;
