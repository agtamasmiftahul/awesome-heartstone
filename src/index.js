import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App'
import Hero from './components/Card'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}>
    <Router>
      <div>
      <Route exact path='/' component={App}/>
      <Route path='/:name' component={Hero}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
