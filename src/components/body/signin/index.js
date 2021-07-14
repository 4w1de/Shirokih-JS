import React from 'react';
import Input from './input/index';

import { connect } from 'react-redux';
import { AiOutlineLogin } from 'react-icons/ai';
import { login } from '../../../store/auth/reducer';

import '../Body.css';
import './SignIn.css';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputsForm: {
                email: {
                    elemType: 'input',
                    elemConfig: {
                        type: 'text',
                        placeholder: 'Enter e-mail',
                    },
                    label: 'Имя пользователя',
                    value: '',
                    validation: {
                        reqired: true,
                        type: 'email',
                    },
                    valid: false,
                    touched: false,
                },
                password: {
                    elemType: 'input',
                    elemConfig: {
                        type: 'password',
                        placeholder: 'Enter password',
                    },
                    label: 'Пароль пользователя',
                    value: '',
                    validation: {
                        reqired: true,
                        type: 'password',
                    },
                    valid: false,
                    touched: false,
                },
            },
            formIsValid: false,
        };

        this.authorization = this.authorization.bind(this);
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.reqired) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.type === 'email') {
            isValid =
                new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g).test(
                    value.trim().toLowerCase(),
                ) && isValid;
        }

        if (rules.type === 'password') {
            isValid =
                new RegExp('^(?=.*[a-z])^(?=.*[0-9])(?=.{8,})').test(
                    value.trim().toLowerCase(),
                ) && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedInputsForm = {
            ...this.state.inputsForm,
        };
        const updatedFormElem = {
            ...updatedInputsForm[inputIdentifier],
        };
        updatedFormElem.value = event.target.value;
        console.log(updatedFormElem.value);
        updatedFormElem.valid = this.checkValidity(
            updatedFormElem.value,
            updatedFormElem.validation,
        );
        updatedFormElem.touched = true;
        updatedInputsForm[inputIdentifier] = updatedFormElem;

        let formIsValid = true;
        for (let inputIdentifier in updatedInputsForm) {
            formIsValid =
                updatedInputsForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({
            inputsForm: updatedInputsForm,
            formIsValid: formIsValid,
        });
    };

    authorization(event, history) {
        if (this.state.formIsValid) {
            const data = {
                email: this.state.inputsForm.email.value,
                password: this.state.inputsForm.password.value,
            };
            event.preventDefault();
            this.props.login(data);
            history.push({ pathname: '/' });
        }
    }

    render() {
        const formElemsArr = [];
        for (let inpType in this.state.inputsForm) {
            formElemsArr.push({
                id: inpType,
                config: this.state.inputsForm[inpType],
            });
        }
        const { history } = this.props;

        return (
            <div className="divBody">
                <div className="div-signIn">
                    <h1>Sign In</h1>
                    <hr />
                    {formElemsArr.map((formElem) => (
                        <Input
                            key={formElem.id}
                            elemType={formElem.config.elemType}
                            elemConfig={formElem.config.elemConfig}
                            label={formElem.config.label}
                            value={formElem.config.value}
                            invalid={!formElem.config.valid}
                            touched={formElem.config.touched}
                            changed={(event) =>
                                this.inputChangedHandler(event, formElem.id)
                            }
                        />
                    ))}
                    <div
                        className={
                            this.state.formIsValid
                                ? 'div-login'
                                : 'div-login-disabled'
                        }
                        onClick={(event) => this.authorization(event, history)}>
                        <AiOutlineLogin size="26" />
                        <b>Войти</b>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = { login };

export default connect(null, mapDispatchToProps)(SignIn);
