import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MenuContainer extends Component {

    render() {
        return (
            <nav className="site-header sticky-top py-1">
                <div className="container d-flex flex-column flex-md-row justify-content-start">
                    <Link to={`/`} className="py-2 col">Лого</Link>
                    <Link to={`/`} className="py-2">Мои показания</Link>
                    <Link to={`/`} className="py-2">Показания по дому</Link>
                    <Link to={`/`} className="col-md-3 offset-md-3">Выход</Link>
                </div>
            </nav>
        );
    }
}

function mapStateToProps (state) {
    return {
        basket: state.basket
    };
}

export default connect(mapStateToProps)(MenuContainer);