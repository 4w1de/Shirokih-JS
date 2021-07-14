import * as types from './types.js';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cards: [],
    viewOnly: false,
};

const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_CARDS:
            return {
                ...state,
                cards: [...action.cards],
            };
        case types.ADD_CARD:
            const newCard = {
                id: uuidv4(),
                title: '',
                text: '',
                checked: false,
                editMode: false,
            };
            return {
                ...state,
                cards: state.cards.concat(newCard),
            };
        case types.REMOVE_CARDS:
            return {
                ...state,
                cards: state.cards.filter((card) => card.checked !== true),
            };
        case types.EDIT_CARD:
            const cardIndexEC = state.cards.findIndex((card) => {
                return card.id === action.cardID;
            });
            const changedCardEC = { ...state.cards[cardIndexEC] };
            const cardsEC = [...state.cards];
            changedCardEC.title = action.title;
            changedCardEC.text = action.text;
            changedCardEC.editMode = false;
            cardsEC[cardIndexEC] = changedCardEC;
            return {
                ...state,
                cards: cardsEC,
            };
        case types.CHANGE_MODE:
            const cardIndexCM = state.cards.findIndex((card) => {
                return card.id === action.cardID;
            });
            const changedCardCM = { ...state.cards[cardIndexCM] };
            const cardsCM = [...state.cards];
            changedCardCM.checked = false;
            changedCardCM.editMode = !changedCardCM.editMode;
            cardsCM[cardIndexCM] = changedCardCM;
            return {
                ...state,
                cards: cardsCM,
            };
        case types.CHANGE_MODE_VIEW:
            if (!state.viewOnly) {
                const tmp = state.cards.map((card) => {
                    card.editMode = false;
                    return card;
                });
                return {
                    ...state,
                    cards: tmp,
                    viewOnly: true,
                };
            } else return { ...state, viewOnly: false };
        case types.CHANGE_CHECK:
            const cardIndexCC = state.cards.findIndex((card) => {
                return card.id === action.cardID;
            });
            const changedCardCC = { ...state.cards[cardIndexCC] };
            const cardsCC = [...state.cards];
            changedCardCC.checked = !changedCardCC.checked;
            cardsCC[cardIndexCC] = changedCardCC;
            return {
                ...state,
                cards: cardsCC,
            };
    }
    return state;
};

export default cardsReducer;
