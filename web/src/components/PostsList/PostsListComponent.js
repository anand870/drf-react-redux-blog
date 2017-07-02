import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PostsList extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  componentWillReceiveProps(){
    this.props.fetchPosts();
  }
  renderPosts(posts){
    return posts.map((post)=>{
      return (
        <div key={post.id} className="row list-item">
            <h3>{post.title}</h3>
            <p>{post.description}
            <Link to={`/${post.slug}/`}>Read More</Link></p>
        </div>
      )
    })
  }
  render(){
    const {posts} =  this.props.postsList;
    return(
      <div className="container">
          <p><strong>Must Read Articles</strong></p>
          <div className="col-md-12">
          { this.renderPosts(posts)}
          </div>
      </div>
    );
  }
}

export default PostsList;
