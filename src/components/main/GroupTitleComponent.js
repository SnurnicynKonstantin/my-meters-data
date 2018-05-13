import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class GroupTitleComponent extends Component {

    render() {

        return (
            <h2 id={this.props.attributes.id}>
                <span>{this.props.attributes.name}</span>
            </h2>

        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(GroupTitleComponent);