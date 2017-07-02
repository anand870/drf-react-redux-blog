import { connect } from 'react-redux';
import PostsListComponent from './PostsListComponent';
import { getPosts,POST_TYPE } from '../../store/Posts/actions'

const mapStateToProps = (state) => {
  return {
    postsList : state.posts[POST_TYPE.MAIN_POSTS]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts(POST_TYPE.MAIN_POSTS)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostsListComponent);
