import Axios from 'axios';

export const home = (token_type, access_token) => {
  return Axios.get('/api/home', {
    headers: {
      Authorization: `${token_type} ${access_token}`
    }
  })
}

export const apiMenu = (token_type, access_token) => {
    return Axios({
        method: 'POST',
        url: '/api/menu',
        headers: {
          Authorization: `${token_type} ${access_token}`
        },
        data: {
            show_all: '1'
        },
    })
  }
