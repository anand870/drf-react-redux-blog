import { FETCH_POSTS } from '../actions/posts';
const INITIAL_STATE = {
  postsList:{
    posts:[],
    error:null,
    loading:false
  }
}

export default function(state=INITIAL_STATE,action){
  //let error;
  switch(action.type){
    case FETCH_POSTS:
      return { ...state,postsList:{posts:[],error:null,loading:true}}
    default:
      return state;
  }
}
