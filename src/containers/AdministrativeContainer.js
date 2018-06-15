import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import dateHelper from '../helpers/dateHelper';
import * as metersActions from '../actions/metersActions';
import Table from '../components/myMeters/TableComponent';
import Graphic from '../components/myMeters/GraphicComponent';
import Excel from '../components/myMeters/ExcelComponent';
import DateFilter from '../components/myMeters/DateFilterComponent';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { withStyles, withStylesPropTypes, css } from 'react-with-styles';
moment.locale('ru')

class AdministrativeContainer extends Component {

    render() {
        return (
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <h1 className="h2">Показания дома ...</h1>
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <DateFilter/>
                       <Excel meters={this.props.meters}/>
                   </div>
               </div>
               <Table meters={this.props.meters}></Table>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        meters: state.meters
    };
}

export default connect(mapStateToProps)(AdministrativeContainer);