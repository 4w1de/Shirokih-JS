import React from 'react';
import Header from './components/header';
import Routes from './routes';
import { CardContext, CardsContextConsumer } from './context/CardContext';
class App extends React.Component {
    render() {
        return (
            <CardContext>
                <CardsContextConsumer>
                    {(context) => (
                        <>
                            <Header />
                            <Routes changeModeView={context.changeModeView} />
                        </>
                    )}
                </CardsContextConsumer>
            </CardContext>
        );
    }
}

export default App;
