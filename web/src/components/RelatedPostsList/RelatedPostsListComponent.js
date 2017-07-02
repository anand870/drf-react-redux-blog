import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './RelatedPostsList.css';

class PostsList extends Component{
  componentWillMount(){
    this.props.fetchPosts();
  }
  renderPosts(posts,loading){
    if(loading){
      return (
        <p>Loading...</p>
      )
    }
    return posts.map((post)=>{
      return (
        <div key={post.id} className="col-md-3">
          <div className="slider-img">
            <img alt={post.title} src={post.featured_image} />
          </div>
          <h4><Link to={`/${post.slug}/`}>{post.title}</Link></h4>
        </div>
      )
    })
  }
  render(){
    const {posts,loading} =  this.props.postsList;
    return(
      <div className="container">
          <h3 className="subhead">What To Read Next</h3>
          <div className="slider-con row">
          { this.renderPosts(posts,loading)}
          </div>
      </div>
    );
  }
}

export default PostsList;

