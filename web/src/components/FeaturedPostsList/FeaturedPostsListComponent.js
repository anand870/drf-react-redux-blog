import React, { Component } from 'react';

class PostsList extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  renderPosts(posts){
    return posts.map((post)=>{
      return (
          <div key={post.id} className="featured">
              <div className="top-image-con">
                  <img alt={post.title} src={post.featured_image} />
              </div>
              <h3>{post.title}</h3>
              <span>Thursday, September 18th, 2014</span>
              <p>{post.description}</p>
          </div>
      );
    })
  }
  render(){
    const {posts} =  this.props.postsList;
    return(
      <div className={(this.props.hidden)?"row hidden":"row"}>
        <div className="col-md-12">
          <h2>Featured Article</h2>
          { this.renderPosts(posts.slice(3))}
        </div>
      </div>
    );
  }
}

export default PostsList;

