import React from 'react';
import { CardsContextConsumer } from '../../context/CardContext';
import { Badge } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Header.css';

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
