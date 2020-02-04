import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
// import {MessageBox, Message} from 'element-ui'
// import {getToken} from '@/utils/auth'
// import store from '@/store'


// создаем экземпляр запроса
const service = axios.create({
  adapter: httpAdapter,
  baseURL: process.env.VUE_APP_BASE_API,
  // withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});


// внедряем токен сессии в хедер каждого запроса
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken()
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

// OkRequest:
// { status: true, data: { } }
// BadRequest:
// { status: false, message: '', code: 0, errors: { } }
// 5008 -- ненастоящий токен
// 5014 -- токен истек
service.interceptors.response.use(
  response => {

    // const res = response.data;

    // if (res.status) {
    //   return res
    // } else {
    //   if (res.code === 5008 || res.code === 5014) {
    //     MessageBox.confirm('Вы вышли из системы. Нажмите отмена, чтобы остаться на этой станице или войдите снова', 'Внимание', {
    //       confirmButtonText: 'Войти',
    //       cancelButtonText: 'отмена',
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/logout').then(() => {
    //         location.reload()
    //       })
    //     })
    //   } else {
    //     Message({
    //       message: res.message || 'ошибка',
    //       type: 'error',
    //       duration: 5 * 1000
    //     })
    //     return Promise.reject(res)
    //   }
    // }
    return response.data
  },
  error => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
);

export default service
