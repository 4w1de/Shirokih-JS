import React from 'react';
import Header from './components/header';
import Routes from './routes';
import { CardContext } from './context/CardContext';
class App extends React.Component {
    render() {
        return (
            <CardContext>
                <>
                    <Header />
                    <Routes />
                </>
            </CardContext>
        );
    }
}

export default App;
