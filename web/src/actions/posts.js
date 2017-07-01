import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_NEXT_POSTS = 'FETCH_NEXT_POSTS';
export const FETCH_NEXT_POSTS_SUCCESS = 'FETCH_NEXT_POSTS_SUCCESS';
export const FETCH_NEXT_POSTS_FAILURE = 'FETCH_NEXT_POSTS_FAILURE';

const ROOT_URL = 'http://localhost:8005';// : '/api';

//@TODO Remove repeats
export function fetchPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts/`,
    headers: [],
    params:{
      format:'json'
    }
  });

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPostsSuccess(posts){
  return {
    type: FETCH_POSTS_SUCCESS,
    payload:posts
  }
}

export function fetchPostsFailure(error){
  return{
    type : FETCH_POSTS_FAILURE,
    payload:error
  }
}

//actions creaters for next posts

export function fetchNextPosts() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/posts/`,
    headers: [],
    params:{
      format:'json'
    }
  });

  return {
    type: FETCH_NEXT_POSTS,
    payload: request
  };
}

export function fetchNextPostsSuccess(posts){
  return {
    type: FETCH_NEXT_POSTS_SUCCESS,
    payload:posts
  }
}

export function fetchNextPostsFailure(error){
  return{
    type : FETCH_NEXT_POSTS_FAILURE,
    payload:error
  }
}
