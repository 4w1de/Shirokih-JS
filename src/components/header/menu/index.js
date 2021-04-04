import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin } from 'react-icons/ai';
import './Menu.css';

function Menu() {
    return (
        <div className="divMenu">
            <Link style={{ textDecoration: 'none' }} to="/">
                <div className="styleIcon">
                    <AiOutlineHome size="25px" />
                    home
                </div>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/asd">
                <div className="styleIcon">
                    <AiOutlineLogin size="25px" />
                    sign in
                </div>
            </Link>
        </div>
    );
}
export default Menu;
