import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class TableComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>Hello!</div>
        );
    }
}

function mapStateToProps (state) {
    return {
        // basket: state.basket
    };
}

export default connect(mapStateToProps)(TableComponent);