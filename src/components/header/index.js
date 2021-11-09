import React from 'react';
import Menu from './menu';

import './Header.css';

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
