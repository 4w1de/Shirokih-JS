import React from 'react';
//import Body from './components/body';
import Header from './components/header';
import Routes from './routes';
import { CardContext, CardsContextConsumer } from './context/CardContext';
//<Body changeModeView={context.changeModeView} />
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
