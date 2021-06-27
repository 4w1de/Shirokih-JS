import React from 'react';
import './Header.css';
import Menu from './menu';

class Header extends React.Component {
    render() {
        return (
            <header className="styleHeader">
                <Menu />
                Карточки
            </header>
        );
    }
}

export default Header;
