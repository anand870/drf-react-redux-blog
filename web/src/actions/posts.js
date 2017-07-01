import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://localhost:3000/api';// : '/api';

export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts`,
    headers: []
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
