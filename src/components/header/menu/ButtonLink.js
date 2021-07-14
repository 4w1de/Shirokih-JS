import React from 'react';

import { Link } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineLogin,
    AiOutlineLogout,
    AiOutlineBorder,
} from 'react-icons/ai';

function ButtonLink(props) {
    const linkString = '/' + props.pageAddress;
    const iconButton = () => {
        switch (props.nameIcon) {
            case 'AiOutlineHome':
                return <AiOutlineHome size="25px" />;
            case 'AiOutlineLogin':
                return <AiOutlineLogin size="25px" />;
            case 'AiOutlineLogout':
                return <AiOutlineLogout size="25px" />;
            default:
                return <AiOutlineBorder size="25px" />;
        }
    };

    return (
        <Link style={{ textDecoration: 'none' }} to={linkString}>
            <div className="style-icon">
                {iconButton()}
                {props.title}
            </div>
        </Link>
    );
}

export default ButtonLink;
