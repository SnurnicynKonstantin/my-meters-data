import React , { PropTypes, Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Menu from './MenuContainer';
import Head from './HeadContainer';
import Content from './ContentContainer';
import Footer from './FooterContainer';
import Basket from '../components/basket/BasketComponent';
import moment from 'moment';
import dateHelper from '../helpers/dateHelper';

class App extends Component {

    constructor(props) {
        super(props);
        dateHelper.setDateToStorage(1,
                              moment().subtract(12, 'months').format('M'),
                              moment().subtract(12, 'months').format('YYYY'),
                              1,
                              moment().format('M'),
                              moment().format('YYYY'));
    }

    render() {
        return (
            <div className="main">
                <Menu location={this.props.location}/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(App);