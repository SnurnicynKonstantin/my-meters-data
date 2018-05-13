import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import GroupTitle from '../components/main/GroupTitleComponent';
import GroupDescription from '../components/main/GroupDescriptionComponent';
import GroupContent from '../components/main/GroupContentComponent';
import Groups from '../data/groups';
import * as basketActions from '../actions/basketActions';


class GroupsContainer extends Component {
    constructor(props) {
        super(props);

        let { dispatch } = this.props;
        this.basketActions = bindActionCreators(basketActions, dispatch);

        this.buyItemHandler = this.buyItemHandler.bind(this);
    }

    buyItemHandler(item) {
        this.basketActions.addItem(item);
    }

    render() {

        let groups = [];

        Groups.forEach(function(group) {
            groups.push(<GroupTitle attributes={group}/>);
            groups.push(<GroupDescription attributes={group}/>);
            groups.push(<GroupContent attributes={group} buyItemHandler={this.buyItemHandler}/>);
        }, this);


        return (
            <div className="prods_list container">
                {groups}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(GroupsContainer);