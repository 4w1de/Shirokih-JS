import React from 'react';
import Header from './components/header';
import Routes from './routes';
class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Routes />
            </>
        );
    }
}

export default App;
