import * as types from './types.js';

export const onInitCards = (cards) => ({
    type: types.INIT_CARDS,
    cards: cards,
});

export const onAddCard = () => ({
    type: types.ADD_CARD,
});

export const onRemoveCards = () => ({
    type: types.REMOVE_CARDS,
});

export const onEditCard = (id, title, text) => ({
    type: types.EDIT_CARD,
    cardID: id,
    title: title,
    text: text,
});

export const onChangeMode = (id) => ({
    type: types.CHANGE_MODE,
    cardID: id,
});

export const onChangeModeView = () => ({
    type: types.CHANGE_MODE_VIEW,
});

export const onChangeCheck = (id) => ({
    type: types.CHANGE_CHECK,
    cardID: id,
});
