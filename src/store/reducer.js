import { combineReducers } from 'redux';
import cardsReducer from './cards/reducer';
import authorizationSlice from './auth/reducer';

const rootReducer = combineReducers({
    cards: cardsReducer,
    auth: authorizationSlice,
});

export default rootReducer;
