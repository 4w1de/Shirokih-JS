import {
    AiOutlineDelete,
    AiOutlinePlus,
    AiOutlineSetting,
    AiOutlineBorder,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ButtonBodyHeader(props) {
    const iconButton = () => {
        switch (props.nameIcon) {
            case 'AiOutlineDelete':
                return (
                    <AiOutlineDelete size="50px" style={{ margin: 'auto 0' }} />
                );
            case 'AiOutlinePlus':
                return (
                    <AiOutlinePlus size="50px" style={{ margin: 'auto 0' }} />
                );
            case 'AiOutlineSetting':
                return (
                    <AiOutlineSetting
                        size="50px"
                        style={{ margin: 'auto 0' }}
                    />
                );
            default:
                return (
                    <AiOutlineBorder size="50px" style={{ margin: 'auto 0' }} />
                );
        }
    };
    return props.isBtnForCards ? (
        <label className="label-btn" onClick={props.eventForCards}>
            {iconButton()}
            <h2>{props.title}</h2>
        </label>
    ) : (
        <Link
            style={{
                textDecoration: 'none',
                display: 'inline-block',
                margin: '20px 0 0 200px',
            }}
            to="/settings">
            <label className="label-btn settings">
                {iconButton()}
                <h2>{props.title}</h2>
            </label>
        </Link>
    );
}

export default ButtonBodyHeader;
