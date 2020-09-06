import request from '../../utils/http';

function login(account, password) {
  return request('/login', { account, password },
    {
      method: 'post'
    });
}

export default login;