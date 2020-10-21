import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './App';
import 'bootstrap-css-only/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/:dataId" component={App}/>
  </Router>,
  document.getElementById('root')
);
/* 
// Figure out how to authenticate using this. 
ReactDOM.render(
  <MMProvider
    domain={process.env.REACT_APP_URL}
    clientId={process.env.REACT_APP_CLIENT_ID}
    clientSecret={process.env.REACT_APP_CLIENT_SECRET}
    releaseStage={process.env.REACT_APP_RELEASE_STAGE}
    scope={'reporting'}
  >
    <App />
  </MMProvider>,
  document.getElementById('root')
); */