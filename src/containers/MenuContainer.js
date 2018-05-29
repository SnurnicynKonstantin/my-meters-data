import React , { PropTypes, Component } from 'react';
import {Router, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MenuContainer extends Component {

    constructor(props) {
        super(props);

        this.logoutHandler = this.logoutHandler.bind(this);
    }

    logoutHandler(e) {
        localStorage.clear();
    }

    render() {
        if(!localStorage.getItem('token')) {
            browserHistory.push('/login');
        }

        return (
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-start">
                    <Link to={`/`} className="py-2 col">Лого</Link>
                    <Link to={`/`} className="py-2">Мои показания</Link>
                    <Link to={`/`} className="py-2">Показания по дому</Link>
                    <Link to={`/login`} className="col-md-1 offset-md-6" onClick={this.logoutHandler}>Выход</Link>
                </div>
            </nav>
        );
    }
}

function mapStateToProps (state) {
    return {
    };
}

export default connect(mapStateToProps)(MenuContainer);