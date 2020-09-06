import { CHANGE_ACCOUNT, CHANGE_LOGIN_STATUS }  from './actionTypes';

export const changeAccountValue = (value) => ({
    type: CHANGE_ACCOUNT,
    value,
});

export const changeLoginStatus = (value) => ({
    type: CHANGE_LOGIN_STATUS,
    value,
});