import React, { Component } from 'react';

class PostDetail extends Component{
  componentWillMount(){
    this.props.fetchPost();
  }
  componentWillReceiveProps(newprop){
    let nextslug = newprop.match.params.slug;
    this.props.fetchPost(nextslug);
  }
  renderPost(post,loading,error){
    return (
      <div key={post.id} className="featured">
          <div className="top-image-con">
              <img alt={post.title} src={post.featured_image} />
          </div>
         <h3>{post.title}</h3>
          <span>Thursday, September 18th, 2014</span>
          <p>{post.content}</p>
      </div>
    );
  }

  renderLoading(){
    return <h1>Loading....</h1>
  }
  renderError(error){
    return <h1>{error}</h1>
  }
  render(){
    const { post,loading,error } = this.props.activePost;
    return (
      <div className="row">
        <div className="col-md-12">
          { !loading && !error && post && this.renderPost(post,loading,error)}
          { loading && this.renderLoading()}
          { error && this.renderError(error)}
        </div>
      </div>
    )
  }
}

export default PostDetail;

