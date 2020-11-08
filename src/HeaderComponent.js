import React from 'react';

function HeaderComponent(props) {
    const styleHeader = {
        width: '100%',
        height: 100,
        background: 'linear-gradient(135deg, #efefff 25%, transparent 25%) -50px 0, linear-gradient(225deg, #efefff 25%, transparent 25%) -50px 0, linear-gradient(315deg, #efefff 25%, transparent 25%), linear-gradient(45deg, #efefff 25%, transparent 25%)',
        backgroundSize: '100px 100px',
        backgroundColor: '#dfe6fd',
        fontSize: "60px",
        fontWeight: 'bolder',
        fontFamily: 'Comic Sans MS, Arial',
        color: '#031d71',
        textAlign: 'center'
    }
    return (
        <div>
            <header style={styleHeader}>
                текст header
            </header>
        </div>
    );
}

export default HeaderComponent;
