import React from 'react';
import Body from './components/body/Body';
import Header from './components/header/Header';
import { CardContext, CardsContextConsumer } from './context/CardContext';

class App extends React.Component {
    render() {
        return (
            <CardContext>
                <CardsContextConsumer>
                    {(context) => (
                        <>
                            <Header />
                            <Body changeModeView={context.changeModeView} />
                        </>
                    )}
                </CardsContextConsumer>
            </CardContext>
        );
    }
}

export default App;
