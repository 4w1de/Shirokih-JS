import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import './Menu.css';

function Menu() {
    return (
        <div className="div-cont-menu">
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
export default Menu;
