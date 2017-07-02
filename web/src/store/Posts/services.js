import axios from 'axios';
import { ROOT_URL } from '../../config';
export const requestPosts = (params)=>{
  return axios({
    method: 'get',
    url: `${ROOT_URL}/posts/`,
    headers: [],
    params:Object.assign({
      format:'json'
    },params)
  })
}
export const requestPost = (slug)=>{
  return axios({
    method: 'get',
    url: `${ROOT_URL}/posts/${slug}/`,
    headers: [],
    params:Object.assign({
      format:'json'
    })
  })
}

