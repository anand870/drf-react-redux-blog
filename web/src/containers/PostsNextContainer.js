import { connect } from 'react-redux';
import PostsNext from '../components/PostsNext';
import { fetchNextPosts,fetchNextPostsSuccess,fetchNextPostsFailure } from '../actions/posts';

const mapStateToProps = (state) => {
  return {
    postsList : state.posts.postsNext
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts:()=>{
      dispatch(fetchNextPosts()).then((response)=>{
        if(!response.error){
          dispatch(fetchNextPostsSuccess(response.payload.data));
        }
        else{
          dispatch(fetchNextPostsFailure(response.payload.data));
        }
      }); 
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsNext);





