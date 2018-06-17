import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import dateHelper from '../helpers/dateHelper';
import * as metersActions from '../actions/metersActions';
import AdministrativeTable from '../components/myMeters/AdministrativeTableComponent';
import Graphic from '../components/myMeters/GraphicComponent';
import AdministrativeExcel from '../components/myMeters/AdministrativeExcelComponent';
import AdministrativeDateFilterComponent from '../components/myMeters/AdministrativeDateFilterComponent';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { withStyles, withStylesPropTypes, css } from 'react-with-styles';
moment.locale('ru')

class AdministrativeContainer extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);
    }

    componentDidMount() {
        this.metersActions.getAdministrativeMeters();
    }

    render() {
        return (
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <h1 className="h2">Показания дома по улице {this.props.street}</h1>
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <AdministrativeDateFilterComponent/>
                       <AdministrativeExcel meters={this.props.meters}/>
                   </div>
               </div>
               <AdministrativeTable/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        street: state.administrativeMeters.street
    };
}

export default connect(mapStateToProps)(AdministrativeContainer);