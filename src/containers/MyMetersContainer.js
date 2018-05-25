import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as metersActions from '../actions/metersActions';
import Table from '../components/myMeters/TableComponent';
import Graphic from '../components/myMeters/GraphicComponent';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';

class MyMetersContainer extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);

        this.onApplyHandler = this.onApplyHandler.bind(this);
    }

    componentDidMount() {
        this.metersActions.getMeters();
    }

    onApplyHandler(event, picker) {
        console.log("Start ", picker.startDate);
        console.log("Stop ", picker.endDate);
    }

    render() {
        return (
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <h1 className="h2">Мои показания (кв.{localStorage.getItem('roomNumber')})</h1>
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <div className="btn-group mr-2">
                           <button className="btn btn-sm btn-outline-primary">Share</button>
                           <button className="btn btn-sm btn-outline-primary">Экспорт в Excel</button>
                       </div>
                       <DateRangePicker startDate="1/1/2014" endDate="3/1/2014" onApply={this.onApplyHandler}>
                           <button className="btn btn-sm btn-outline-primary dropdown-toggle">
                               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                               Интервал
                           </button>
                       </DateRangePicker>
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