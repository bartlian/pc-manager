import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/',
  timeout: 60 * 1000,
});

const request = function(url, data, config) {
  return new Promise((resolve, reject) => {
    instance.request({
      url,
      data,
      method: 'get',
      timeout: 30 * 1000,
      ...config
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        console.log(err);
      });
  });
}

export default request;