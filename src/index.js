import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootReducer from './store/reducer.js';

import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log('[Middleware] prev state ', store.getState());
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] next state ', store.getState());
            return result;
        };
    };
};

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root'),
);
