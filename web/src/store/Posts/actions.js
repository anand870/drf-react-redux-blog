import axios from 'axios';
import { 
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SEARCH_STATE,
  POST_TYPE 
} from './reducers';

export {POST_TYPE};

export const fetchPosts = (post_type,params={})=>{
  return {
    type:FETCH_POSTS,
    post_type,
    params
  }
}

export const fetchPostsSuccess = (posts,post_type,params={})=>{
  return {
    type: FETCH_POSTS_SUCCESS,
    payload:posts,
    post_type,
    params
  }
}

const ROOT_URL = 'http://localhost:8005';// : '/api';

export const fetchPostsFailure = (error,post_type,params={})=>{
  return{
    type : FETCH_POSTS_FAILURE,
    payload:error,
    post_type,
    params
  }
}
export const searchAction = (active)=>{
  return {
    type: SEARCH_STATE,
    state : !!active
  }
}

export const getPosts = (post_type,params={}) => (dispatch) =>{
  dispatch(fetchPosts(post_type));
  return axios({
    method: 'get',
    url: `${ROOT_URL}/posts/`,
    headers: [],
    params:Object.assign(params,{
      format:'json'
    })
  }).then((response)=>{
    if(!response.error){
      dispatch(fetchPostsSuccess(response.data,post_type,params));
    }
    else{
      dispatch(fetchPostsFailure(response.data,post_type,params));
    }
    
  })
}

export const searchPosts = (query,post_type)=>(dispatch)=> {
  dispatch(searchAction(!!query));
  dispatch(getPosts(post_type || POST_TYPE.MAIN_POSTS,{search:query}));
}

