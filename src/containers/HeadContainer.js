import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HeadContainer extends Component {

    render() {
        return (
            <div className="head container">
                <div className="logo">
                    <Link to={`/`}><div className="divForLogo"></div></Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(HeadContainer);