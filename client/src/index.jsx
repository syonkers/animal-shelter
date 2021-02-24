import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import routes from './js/routes';
import './css/main.scss';

import reducers from './js/store';
import App from './js/components/App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>
        <Router>
          {routes}
        </Router>
      </App>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);
