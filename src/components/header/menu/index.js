import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import './Menu.css';
import { Badge, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Menu extends React.Component {
    render() {
        return (
            <div className="div-cont-menu">
                <h6>
                    <Button variant="light">
                        Cards{' '}
                        <Badge variant="light">{this.props.cardsCount}</Badge>
                    </Button>
                </h6>
                <div className="div-menu">
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <div className="style-icon">
                            <AiOutlineHome size="25px" />
                            home
                        </div>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="/signin">
                        <div className="style-icon">
                            <AiOutlineLogin size="25px" />
                            sign in
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { cardsCount: state.cards.length };
};

export default connect(mapStateToProps)(Menu);
