import { connect } from 'react-redux';
import PostsList from '../components/PostsList';
import { fetchPosts,fetchPostsSuccess,fetchPostsFailure } from '../actions/posts';

const mapStateToProps = (state) => {
  return {
    postsList : state.posts.postsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts:()=>{
      dispatch(fetchPosts()).then((response)=>{
        if(!response.error){
          dispatch(fetchPostsSuccess(response.payload.data));
        }
        else{
          dispatch(fetchPostsFailure(response.payload.data));
        }
      }); 
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsList);




