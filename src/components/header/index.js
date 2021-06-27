import React from 'react';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Header.css';
import Menu from './menu';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <header className="styleHeader">
                <Menu />
                текст header
                <div>
                    <Button variant="primary">
                        Cards{' '}
                        <Badge variant="light">{this.props.cardsCount}</Badge>
                    </Button>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return { cardsCount: state.cards.length };
};

export default connect(mapStateToProps)(Header);
