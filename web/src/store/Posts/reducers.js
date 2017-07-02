export const POST_TYPE = {
  MAIN_POSTS:'mainPosts',
  RELATED_POSTS:'relatedPosts',
  FEATURED_POSTS : 'featuredPosts'
}

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const SEARCH_STATE = 'SEARCH_STATE';

const INITIAL_STATE = {
  searchActive:false,
  mainPosts:{
    params:{},
    posts:[],
    error:null,
    loading:false
  },
  relatedPosts:{
    params:{},
    posts:[],
    error:null,
    loading:false,
  },
  featuredPosts:{
    params:{},
    posts:[],
    error:null,
    loading:false
  }
}
export default function(state=INITIAL_STATE,action){
  switch(action.type){
    case FETCH_POSTS:
      return { ...state,[action.post_type]:{posts:[],error:null,loading:true,params:{}}}
    case FETCH_POSTS_SUCCESS:
      let params = action.params || {}; 
      return { ...state,[action.post_type]:{posts:action.payload,error:null,loading:false,params:params}}
    case FETCH_POSTS_FAILURE:
      return { ...state,[action.post_type]:{posts:[],error:action.payload,loading:false}}

    case SEARCH_STATE:
      return { ...state,searchActive:action.state}
    default:
      return state;
    }
}
