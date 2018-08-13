// Redux store and moddleware configuration file
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/index'

export const initialState = {
  projects: [],
  sidebars: {}
};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
);

export default store
