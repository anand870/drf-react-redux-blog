export const POST_TYPE = {
  MAIN_POSTS:'mainPosts',
  RELATED_POSTS:'relatedPosts',
  FEATURED_POSTS : 'featuredPosts'
}

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAILURE = 'FETCH_POST_FAILURE';

export const SEARCH = 'SEARCH';

const INITIAL_STATE = {
  activePost:{
    loading:false,
    post:null,
    error:null,
    //holds current state information.e.g If it is in loading state
    //it holds the info of slug being loaded.
    //It may hold the ajax promise in case cancellation is required
    info:{}
  },
  searchActive:false,
  mainPosts:{
    //current filters of the component
    params:{
      search:'',
    },
    //posts currently displayed
    posts:[],
    error:null,
    loading:false,
    //next parameters set by different filters
    //This parameter is reset to empty whenever a call is made
    nextparams:{
    },
    //boolean value set to schedule a request.
    //Initially it always has to make the call
    makecall:true
  },
  relatedPosts:{
    params:{
      ordering:'-modified_at',
      limit : 4
    },
    posts:[],
    error:null,
    loading:false,
  },
  featuredPosts:{
    params:{
      limit:1
    },
    posts:[],
    error:null,
    loading:false
  }
}
export default function(state=INITIAL_STATE,action){
  switch(action.type){
    case FETCH_POSTS:
      return { ...state,[action.post_type]:{posts:[],error:null,loading:true,params:{},makecall:false,nextparams:{}}}
    case FETCH_POSTS_SUCCESS:
      let params = action.params || {}; 
      return { ...state,[action.post_type]:{posts:action.payload,error:null,loading:false,params:params}};
    case FETCH_POSTS_FAILURE:
      return { ...state,[action.post_type]:{posts:[],error:action.payload,loading:false}};
    case SEARCH:
      return { ...state,searchActive:action.state,[action.post_type]:{...state[action.post_type],nextparams:{search:action.search},makecall:true}}

    case FETCH_POST:
      return {...state,activePost:{post:null,loading:true,error:null,slug:null,info:{slug:action.slug}}};
    case FETCH_POST_SUCCESS:
      return { ...state,activePost:{post:action.payload,loading:false,error:null,info:{}}};
    case FETCH_POST_FAILURE:
      return { ...state,activePost:{post:null,loading:false,error:action.payload,info:{}}}

    default:
      return state;
    }
}
