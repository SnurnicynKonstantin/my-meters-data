import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as metersActions from '../actions/metersActions';
import Table from '../components/myMeters/TableComponent';
import Graphic from '../components/myMeters/GraphicComponent';
import Excel from '../components/myMeters/ExcelComponent';
import DateFilter from '../components/myMeters/DateFilterComponent';

class MyMetersContainer extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);
    }

    componentDidMount() {
        this.metersActions.getMeters();
    }

    render() {
        return (
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <h1 className="h2">Мои показания (кв.{localStorage.getItem('roomNumber')})</h1>
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <DateFilter/>
                       <Excel meters={this.props.meters}/>
                   </div>
               </div>
               <Table meters={this.props.meters}></Table>
               <h2 className="border-bottom pb-2 pt-5 text-center">Графики</h2>
               <Graphic meters={this.props.meters}></Graphic>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        meters: state.meters
    };
}

export default connect(mapStateToProps)(MyMetersContainer);