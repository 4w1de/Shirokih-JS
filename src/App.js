import React from 'react';
import Body from './components/body/Body';
import Header from './components/header/Header';

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body />
            </>
        );
    }
}

export default App;
