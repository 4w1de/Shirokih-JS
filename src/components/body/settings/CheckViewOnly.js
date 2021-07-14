import React from 'react';

import { connect } from 'react-redux';
import { BsEye, BsPencil } from 'react-icons/bs';
import { onChangeModeView } from '../../../store/cards/actions';

import styled from 'styled-components';

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
    constructor() {
        super();

        this.changeView = this.changeView.bind(this);
    }

    changeView() {
        this.props.onChangeModeView();
    }
    render() {
        return (
            <Label>
                <HiddenCheckbox onChange={this.changeView} />
                <Checkmark>
                    {this.props.viewOnly ? (
                        <BsEye size="49" color="white" />
                    ) : (
                        <BsPencil size="49" color="white" />
                    )}
                </Checkmark>
                <TextViewObly>
                    {this.props.viewOnly
                        ? 'ТОЛЬКО ПРОСМОТР'
                        : 'ПРОСМОТР И РЕДАКТИРОВАНИЕ'}
                </TextViewObly>
            </Label>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        viewOnly: state.cards.viewOnly,
    };
};
const mapDispatchToProps = { onChangeModeView };

export default connect(mapStateToProps, mapDispatchToProps)(CheckViewOnly);
