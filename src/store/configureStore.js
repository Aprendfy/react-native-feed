import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from './reducers';


function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunk,
      createLogger()
    )
  );

  return createStore(reducers, initialState, enhancer);
}

export default configureStore;
