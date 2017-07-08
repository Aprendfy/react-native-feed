import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import Reducers from './reducers';

export default function (initialState) {
  const enhancer = compose(
    applyMiddleware(
      Thunk,
      //Logger
    )
  );

  return createStore(Reducers, initialState, enhancer);
}
