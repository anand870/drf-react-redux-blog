import { connect } from 'react-redux';
import RelatedPostsListComponent from './RelatedPostsListComponent';
import { getPosts,POST_TYPE } from '../../store/Posts/actions'

const mapStateToProps = (state) => {
  return {
    postsList : state.posts[POST_TYPE.RELATED_POSTS]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts(POST_TYPE.RELATED_POSTS)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RelatedPostsListComponent);

