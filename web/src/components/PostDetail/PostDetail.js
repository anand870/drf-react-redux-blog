import { connect } from 'react-redux';
import PostDetailComponent from './PostDetailComponent';
import { getPost } from '../../store/Posts/actions'; 
const mapStateToProps = (state,props) => {
  return {
    activePost : state.posts.activePost,
  };
}
const mapDispatchToProps = (dispatch,props) => {
  return {
    fetchPost: (slug)=>{
      slug = slug || props.match.params.slug;
      dispatch(getPost(slug));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostDetailComponent);
