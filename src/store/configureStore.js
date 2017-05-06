import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import reducers from './reducers';


function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      Logger
    )
  );

  return createStore(reducers, initialState, enhancer);
}

export default configureStore;
