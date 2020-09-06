import { CHANGE_ACCOUNT, CHANGE_LOGIN_STATUS }  from './actionTypes';

const defaultState = {
  account: '',
  isLogin: false,
};

export default (state = defaultState, action) => {
  if (action.type === CHANGE_ACCOUNT) {
    state.account = action.value
  }

  if (action.type === CHANGE_LOGIN_STATUS) {
    state.isLogin = action.value
  }
  
  return state;
}