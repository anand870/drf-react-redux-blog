import { createStore,applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers';

const enhancer = applyMiddleware(promise);
export default function configureStore(initialState){
  const store = createStore(reducer,initialState,enhancer);
  return store;
}
