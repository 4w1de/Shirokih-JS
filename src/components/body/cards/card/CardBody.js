import React from 'react';

class CardBody extends React.Component {
    render() {
        return (
            <div className="cardBody" onDoubleClick={this.props.onDoubleClick}>
                {!this.props.editMode ? (
                    <p className="bodyText">{this.props.text}</p>
                ) : (
                    <textarea
                        defaultValue={this.props.text}
                        ref={this.props.textRef}
                    />
                )}
            </div>
        );
    }
}

export default CardBody;
