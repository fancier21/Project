import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'

import { App } from './components/App'

import registerServiceWorker from './registerServiceWorker'
import store from './store'

// ////
// import { configureFakeBackend } from './_helpers/fake-backend';
// configureFakeBackend();

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
};

registerServiceWorker();

render(App);
