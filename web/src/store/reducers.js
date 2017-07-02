import { combineReducers } from 'redux';
import PostsReducer from './Posts/reducers';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;

