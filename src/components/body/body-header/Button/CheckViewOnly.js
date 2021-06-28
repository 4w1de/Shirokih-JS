import React from 'react';
import styled from 'styled-components';
import { BsEye, BsPencil } from 'react-icons/bs';
const Label = styled.label`
    display: flex;
    margin: 20px 0 20px 200px;
    height: 50px;
    float: left;
`;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    display: none;
`;
const Checkmark = styled.div`
    position: relative;
    width: 62px;
    height: 62px;
    background-size: cover;
    cursor: pointer;
    margin: auto 0;
    background-color: #3f72af;
    color: #dbe2ef;
    border-radius: 0.25rem;
    padding: 0.25em 0.4em;
`;
const TextViewObly = styled.h3`
    color: white;
    width: 100%;
    margin: 0 0 0 10px;
    line-height: 62px;
    font-weight: bolder;
    color: #112d4e;
`;

class CheckViewOnly extends React.Component {
    render() {
        return (
            <Label>
                <HiddenCheckbox onChange={this.props.changeView} />
                <Checkmark>
                    {this.props.viewOnly ? (
                        <BsEye size="49" color="white" />
                    ) : (
                        <BsPencil size="49" color="white" />
                    )}
                </Checkmark>
                <TextViewObly>{this.props.textCheck}</TextViewObly>
            </Label>
        );
    }
}

export default CheckViewOnly;
