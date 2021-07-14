import React from 'react';
import CounterCards from './CounterCards';
import ButtonLink from './ButtonLink';

import { connect } from 'react-redux';
import { logout } from '../../../store/auth/reducer';

import './Menu.css';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div className="div-cont-menu">
                <CounterCards />
                {this.props.isUserLoggedIn ? (
                    <h6>Приветствую, {this.props.email}</h6>
                ) : null}
                <div className="div-menu">
                    <ButtonLink
                        title="home"
                        nameIcon="AiOutlineHome"
                        pageAddress=""
                    />
                    {this.props.isUserLoggedIn ? (
                        <div onClick={this.logout}>
                            <ButtonLink
                                title="logout"
                                nameIcon="AiOutlineLogout"
                                pageAddress="signin"
                                onClick={this.logout}
                            />
                        </div>
                    ) : (
                        <ButtonLink
                            title="login"
                            nameIcon="AiOutlineLogin"
                            pageAddress="signin"
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        role: state.auth.role,
        isUserLoggedIn: state.auth.isUserLoggedIn,
    };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
