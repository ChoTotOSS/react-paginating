import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import clientMiddleware from './middlewares/clientMiddleware';
import combineReducer from './reducer';

const dev = process.env.NODE_ENV === 'development';
const _initialState = {};

export const initStore = (initialState = _initialState) => {
  const middlewares = [clientMiddleware()];
  const enhancers = [applyMiddleware(...middlewares)];
  let store = createStore(combineReducer(), initialState, ...enhancers);
  if (dev) {
    store = createStore(
      combineReducer(),
      initialState,
      composeWithDevTools(...enhancers)
    );
  }
  return store;
};
