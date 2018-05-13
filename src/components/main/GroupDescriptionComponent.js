import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class GroupDescriptionComponent extends Component {

    render() {
        return (
            <div className="catalog_descr">
                <p>
                    {this.props.attributes.description}
                </p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(GroupDescriptionComponent);