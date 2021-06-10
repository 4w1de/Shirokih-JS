import React from 'react';
import styled from 'styled-components';
import { BsEye, BsPencil } from 'react-icons/bs';
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
                    <Checkmark>
                        {this.props.viewOnly ? (
                            <BsEye size="35" color="white" />
                        ) : (
                            <BsPencil size="35" color="white" />
                        )}
                    </Checkmark>
                    <TextViewObly>{this.props.textCheck}</TextViewObly>
                </Label>
            </div>
        );
    }
}

export default CheckViewOnly;
