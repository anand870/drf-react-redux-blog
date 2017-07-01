import React from 'react';
import {  Route } from 'react-router-dom';
import PostsListContainer from './containers/PostsListContainer';
import PostsFeaturedContainer from './containers/PostsFeaturedContainer';
import PostsNextContainer from './containers/PostsNextContainer';

export const MainRoute = () => (
  <div>
    <Route exact path='/' component={PostsListContainer} />
    <Route exact path='/' component={PostsFeaturedContainer} />
    <Route path='/' component={PostsNextContainer} />
  </div>
)

