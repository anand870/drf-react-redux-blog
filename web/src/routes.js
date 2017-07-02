import React from 'react';
import {  Route } from 'react-router-dom';
import { PostsList } from './components/PostsList';
import { RelatedPostsList } from './components/RelatedPostsList';
import { FeaturedPostsList } from './components/FeaturedPostsList';
//import {PostsFeatured} from './components/PostsFeatured';
//import {PostsNext} from './components/PostsNext';

//    <Route exact path='/' component={PostsFeatured} />
//    <Route path='/' component={PostsNext} />
export const MainRoute = () => (
  <div>
    <Route exact path='/' component={FeaturedPostsList} />
    <Route exact path='/' component={PostsList} />
    <Route path='/' component={RelatedPostsList} />
  </div>
)

