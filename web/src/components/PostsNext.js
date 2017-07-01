import React, { Component } from 'react';

class PostsNext extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  renderPosts(posts){
    return posts.map((post)=>{
      return (
        <div key={post.id}>{post.title}</div>
      )
    })
  }
  render(){
    const {posts} =  this.props.postsList;
    return(
      <div>
        { this.renderPosts(posts)}
      </div>
    );
  }
}
export default PostsNext;

