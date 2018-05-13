import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class LoginContainer extends Component {

    render() {
        return (
            <form className="form-signin">
                <div className="text-center mb-4">
                    <img className="mb-4" src={require('../../textures/avatar.svg')} alt="" width="112" height="112"/>
                    <h1 className="h3 mb-3 font-weight-normal">Войти</h1>
                    <p></p>
                </div>

                <div className="form-label-group">
                    <input type="text" id="inputEmail" className="form-control" placeholder="Номер квартиры" required="" autofocus=""></input>
                    <label for="inputEmail"></label>
                </div>

                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Пароль" required=""></input>
                    <label for="inputPassword"></label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">Вход</button>
            </form>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(LoginContainer);