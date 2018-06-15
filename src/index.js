import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import App from './containers/App';
import Login from './containers/LoginContainer';
import MyMeters from './containers/MyMetersContainer';
import HouseMeters from './containers/AdministrativeContainer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './styles/custom-bootstrap.min.css';
import './styles/style.css';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route component={App}>
                <Route path="/" component={MyMeters} />
                <Route path="/house" component={HouseMeters} />
            </Route>
            <Route path="login" component={Login} />
        </Router>
    </Provider>,
    document.getElementById('app')
);