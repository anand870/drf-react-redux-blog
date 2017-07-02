import { connect } from 'react-redux';
import FeaturedPostsListComponent from './FeaturedPostsListComponent';
import { getPosts,POST_TYPE } from '../../store/Posts/actions'

const mapStateToProps = (state) => {
  return {
    postsList : state.posts[POST_TYPE.FEATURED_POSTS],
    hidden : state.posts.searchActive
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(getPosts(POST_TYPE.FEATURED_POSTS)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FeaturedPostsListComponent);


