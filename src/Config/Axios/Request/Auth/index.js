import Axios from 'axios';

export const apiLogin = (username, password) => {
  return Axios.post('/oauth/token', {
    params: {
      grant_type: 'password',
      client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
      client_id: 'e78869f77986684a',
      username: username,
      password: password,
    }
  })
}
