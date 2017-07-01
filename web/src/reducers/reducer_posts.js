import { 
FETCH_POSTS,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE,
FETCH_NEXT_POSTS,FETCH_NEXT_POSTS_SUCCESS,FETCH_NEXT_POSTS_FAILURE,
} from '../actions/posts';
const INITIAL_STATE = {
  postsList:{
    posts:[],
    error:null,
    loading:false
  },
  postsNext:{
    posts : [],
    error:null,
    loading:false
  }
}

export default function(state=INITIAL_STATE,action){
  //let error;
  switch(action.type){
    case FETCH_POSTS:
      return { ...state,postsList:{posts:[],error:null,loading:true}}
    case FETCH_POSTS_SUCCESS:
      return { ...state,postsList:{posts:action.payload,error:null,loading:false}}
    case FETCH_POSTS_FAILURE:
      return { ...state,postsList:{posts:[],error:action.payload,loading:false}}


    case FETCH_NEXT_POSTS:
      return { ...state,postsNext:{posts:[],error:null,loading:true}}
    case FETCH_NEXT_POSTS_SUCCESS:
      return { ...state,postsNext:{posts:action.payload,error:null,loading:false}}
    case FETCH_NEXT_POSTS_FAILURE:
      return { ...state,postsNext:{posts:[],error:action.payload,loading:false}}

    default:
      return state;
  }
}
