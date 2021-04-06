import React from 'react';
import '../Body.css';
import './SignIn.css';
import { AiOutlineLogin } from 'react-icons/ai';

class SignIn extends React.Component {
    render() {
        return (
            <div className="divBody">
                <div className="div-signIn">
                    <h1>Sign In</h1>
                    <hr />
                    <h3>Имя пользователя</h3>
                    <input type="text" className="inpSign" />
                    <h3>Пароль пользователя</h3>
                    <input type="password" className="inpSign" />
                    <div className="div-login">
                        <AiOutlineLogin size="26" style={{ marginTop: -7 }} />
                        Войти
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
