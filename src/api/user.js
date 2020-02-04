import request from '@/utils/request'

// import axios from 'axios'
// import httpAdapter from 'axios/lib/adapters/http'
//
// const instance = axios.create({
//   baseURL: 'https://api.github.com',
//   adapter: httpAdapter,
// });

export function searchUser(username) {
  return request({
    method: 'GET',
    url: `/users/${username}`
  })
}

