import React from 'react';

import {
    AiOutlineEdit,
    AiOutlineCheck,
    AiOutlineCloseCircle,
} from 'react-icons/ai';

class CardHeader extends React.Component {
    render() {
        return (
            <div
                className="cardHeader"
                onDoubleClick={this.props.onDoubleClick}>
                {!this.props.editMode ? (
                    <>
                        <h2>{this.props.title}</h2>
                        {this.props.viewOnly ? (
                            <div className="divEmpty" />
                        ) : (
                            <>
                                <AiOutlineEdit
                                    size="30px"
                                    style={{
                                        margin: 'auto 10px auto 0',
                                        marginLeft: 'auto',
                                    }}
                                    onClick={this.props.changeMode}
                                />
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    onChange={this.props.changeCheck}
                                    checked={this.props.checked}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <input
                            className="input"
                            defaultValue={this.props.title}
                            onChange={this.props.setTextHeader}
                            ref={this.props.titleRef}
                        />
                        <div style={{ margin: 'auto -10px auto auto' }}>
                            <AiOutlineCheck
                                size="30px"
                                style={{ marginRight: 10 }}
                                onClick={this.props.changeText}
                            />
                            <AiOutlineCloseCircle
                                size="30px"
                                onClick={this.props.changeMode}
                            />
                        </div>
                    </>
                )}
            </div>
        );
    }
}

export default CardHeader;
