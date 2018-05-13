import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import App from './containers/App';
import Order from './containers/OrderContainer';
import Content from './containers/ContentContainer';
import './styles/style.css';
import './styles/editor_style.css';
// import './styles/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import configureStore from './store/configureStore';
import './scripts/jquery-1.8.3.min';
import './scripts/shop.js';
import './scripts/fancybox/jquery.fancybox-1.3.4.js';
import './scripts/fancybox/jquery.fancybox-1.3.4.css';

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route component={App}>
                <Route path="/" component={Content} />
                <Route path="order" component={Order} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);