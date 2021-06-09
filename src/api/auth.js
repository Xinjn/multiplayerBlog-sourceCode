import request from '@/helpers/request'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

 const auth = {
  register({username, password}) {
    return request(URL.REGISTER, 'POST', { username, password })
  },

  login({username, password}) {
    return request(URL.LOGIN, 'POST', { username, password })
  },

   logout() {

    localStorage.removeItem('token')
    return request(URL.LOGOUT)
  },

   getInfo() {
     console.log(localStorage.token);
    if (localStorage.token) {
       return request(URL.GET_INFO, 'GET')
     } else {
       return null
    }
    // return request(URL.GET_INFO, 'GET')
  }
}

export default auth