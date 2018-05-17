import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class MyMetersContainer extends Component {

    render() {
        return (
            <div className="container">
           Hello!
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(MyMetersContainer);