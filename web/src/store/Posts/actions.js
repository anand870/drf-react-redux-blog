import { requestPosts,requestPost } from './services'
import { 
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,

  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,

  SEARCH,
  POST_TYPE 
} from './reducers';

export {POST_TYPE};
//Action Creators

/**
 * post_type: 
 *  - The type of post to be fetched.It is available on action as post_type. 
 *  -  Currently post_type are FEATURED_POSTS,RELATED_POSTS,MAIN_POSTS
 * params : filters applied to the listing.It is saved in the store when response arrives**/
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

export const fetchPostsFailure = (error,post_type,params={})=>{
  return{
    type : FETCH_POSTS_FAILURE,
    payload:error,
    post_type,
    params
  }
}
export const fetchPost = (slug)=>{
  return {
    type:FETCH_POST,
    slug
  }
}

export const fetchPostSuccess = (post)=>{
  return {
    type: FETCH_POST_SUCCESS,
    payload:post,
  }
}

export const fetchPostFailure = (error,slug)=>{
  return{
    type : FETCH_POST_FAILURE,
    payload:error,
    slug
  }
}
export const searchAction = (query,post_type=POST_TYPE.MAIN_POSTS)=>{
  return {
    type: SEARCH,
    state : !!query,
    search:query,
    post_type
  }
}

/**checks if mainpost is scheduled for a refetch
 * it uses store's makecall for specific post
 * Currently enabled for only mainPosts
 */
function canMakeCall(state,post_type){
  if(post_type === POST_TYPE.MAIN_POSTS){
    const Posts = state.posts[POST_TYPE.MAIN_POSTS]
    return Posts.makecall;
  }
  return true;
}

/**
 * Collects the parameters to make the request.
 * The params are collected/merged from following three sources 
 * Priority 1 - extraparams passed from component
 * Priority 2 - scheduled params i.e nextparams in the store
 * Priority 3 - params in the store
 */
function get_params(state,extraparams={},post_type){
    const Posts = state.posts[post_type];
    //get params from next scheduled params and current params
    let params = Object.assign({},Posts.params || {},Posts.nextparams || {},extraparams);
    return params;
}

//Actions 
export const getPosts = (post_type,params={}) => (dispatch,getState) =>{
  /*
   *  It is responsible for fetching the posts of different type
   */
  const state = getState();
  //check if a call can be made using makecall param
  if(canMakeCall(state,post_type)){
    //collect request parameters
    params = get_params(state,params,post_type);
    dispatch(fetchPosts(post_type));
    return requestPosts(params).then((response)=>{
      if(!response.error){
        dispatch(fetchPostsSuccess(response.data,post_type,params));
      }
      else{
        dispatch(fetchPostsFailure(response.data,post_type,params));
      }
    });
  }
}
export const setSearchTerm = (query,post_type)=>(dispatch,getState)=> {
  const Posts = getState().posts[POST_TYPE.MAIN_POSTS];
  if(Posts.params.search !== query){
    dispatch(searchAction(query));
  }
  //dispatch(getPosts(post_type || POST_TYPE.MAIN_POSTS,{search:query}));
}

const shouldFetchPost = (state,nextslug) => {
  /**
   * Check if post  can be fetched.If the post is currently loading
   * it checks if the currently loading post is the requested post.
   * If not loading then it checks if the current rendered post is same as demanded.
   * @TODO
   * Handle error in case multiple requests are in processing
   */
  let activePost = state.posts.activePost;
  let currentslug = activePost.loading? activePost.info.slug:(activePost.post?activePost.post.slug:null); 
  return nextslug !== currentslug;
}

export const getPost = (slug) => (dispatch,getState) => {
  if(!slug){
      dispatch(fetchPostFailure('No Slug provided',slug));
      return;
  }
  if(!shouldFetchPost(getState(),slug)) return Promise.resolve();
  dispatch(fetchPost(slug));
  return requestPost(slug).then((response)=>{
    if(!response.error){
      dispatch(fetchPostSuccess(response.data));
    }
    else{
      dispatch(fetchPostFailure(response.data,slug));
    }
  });
}

