import React from 'react';

function Header() {
    const styleHeader = {
        width: '100%',
        height: 100,
        backgroundColor: 'rgb(145, 145, 145)',
        fontSize: '60px',
        fontWeight: 'bolder',
        fontFamily: 'Comic Sans MS, Arial',
        color: 'white',
        textAlign: 'center',
        textShadow: '2px 5px 1px black',
    };
    return <header style={styleHeader}>текст header</header>;
}

export default Header;
