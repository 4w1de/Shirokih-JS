import React from 'react';
import { CardsContextConsumer } from '../../context/CardContext';
import './Header.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class Header extends React.Component {
    render() {
        return (
            <CardsContextConsumer>
                {(context) => (
                    <header className="styleHeader">
                        текст header
                        <div>
                            <Button variant="primary">
                                Cards{' '}
                                <Badge variant="light">
                                    {context.cardsCount}
                                </Badge>
                            </Button>
                        </div>
                    </header>
                )}
            </CardsContextConsumer>
        );
    }
}

export default Header;
