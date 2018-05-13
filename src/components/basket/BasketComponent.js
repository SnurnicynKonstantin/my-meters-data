import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class BasketComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="basket">
                <h1>Hello man</h1>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(BasketComponent);