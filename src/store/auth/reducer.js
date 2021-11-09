import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: sessionStorage.getItem('email'),
    role: sessionStorage.getItem('role'),
    isUserLoggedIn: sessionStorage.getItem('isUserLoggedIn'),
};

const authorizationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.role =
                action.payload.email === 'testAdmin@gmail.com' &&
                action.payload.password === '12345yuiopp'
                    ? 'Администратор'
                    : 'Пользователь';
            state.isUserLoggedIn = true;

            sessionStorage.setItem('email', state.email);
            sessionStorage.setItem('role', state.role);
            sessionStorage.setItem('isUserLoggedIn', state.isUserLoggedIn);
        },
        logout: (state) => {
            state.email = '';
            state.role = '';
            state.isUserLoggedIn = '';

            sessionStorage.removeItem('email');
            sessionStorage.removeItem('role');
            sessionStorage.removeItem('isUserLoggedIn');
        },
    },
});

export const { login, logout } = authorizationSlice.actions;
export default authorizationSlice.reducer;
