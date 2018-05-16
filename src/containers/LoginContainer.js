import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../actions/loginActions';

class LoginContainer extends Component {

    getInitialState() {
        return {
            name: '',
            password: ''
        }
    }

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.loginActions = bindActionCreators(loginActions, dispatch);

        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
    }

   loginHandler() {
       this.loginActions.login(this.state);
   }

   nameChangeHandler(e) {
       this.setState({name: e.target.value});
   }

   passwordChangeHandler(e) {
       this.setState({password: e.target.value});
   }


   render() {
       //    Make as on GitHub
       return (
           <form className="form-signin">
               <div className="text-center mb-4">
                   <img className="mb-4" src={require('../../textures/avatar.svg')} alt="" width="112" height="112"/>
                   <h1 className="h3 mb-3 font-weight-normal">Войти</h1>
                   <p></p>
               </div>

               <div className="form-label-group">
                   <input type="text" id="inputEmail" className="form-control" placeholder="Номер квартиры" required="" autofocus="" onChange={this.nameChangeHandler}></input>
                   <label for="inputEmail"></label>
               </div>

               <div className="form-label-group">
                   <input type="password" id="inputPassword" className="form-control" placeholder="Пароль" required="" onChange={this.passwordChangeHandler}></input>
                   <label for="inputPassword"></label>
               </div>

               <button className="btn btn-lg btn-primary btn-block mb-4" type="button" onClick={this.loginHandler}>Вход</button>

               <div className="text-center">
                   <p>Есть вопросы? Обращайтесь ks_on_v@mail.ru</p>
               </div>
           </form>
       );
   }
}

function mapStateToProps (state) {
    return {
//        user: null//state.user
    };
}

export default connect(mapStateToProps)(LoginContainer);