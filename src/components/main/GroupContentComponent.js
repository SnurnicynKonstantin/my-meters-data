import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Item from './ItemComponent';

class GroupContentComponent extends Component {

    constructor(props) {
        super(props);
        this.buyItemHandler = this.buyItemHandler.bind(this);
    }

    buyItemHandler(item) {
        this.props.buyItemHandler(item);
    }

    render() {

        let components = [];
        let counter = 1;

        this.props.attributes.content.forEach(function(item) {
            if(counter % 2 === 0)
                components.push(<Item attributes={item} position="last" buyItemHandler={this.buyItemHandler}/>);
            else
                components.push(<Item attributes={item} position="first" buyItemHandler={this.buyItemHandler}/>);
            counter++;
        }, this);

        return (
            <ul>
                {components}
            </ul>

        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(GroupContentComponent);