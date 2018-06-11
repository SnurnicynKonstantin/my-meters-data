import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import moment from 'moment';
import dateHelper from '../helpers/dateHelper';
import * as metersActions from '../actions/metersActions';
import Table from '../components/myMeters/TableComponent';
import Graphic from '../components/myMeters/GraphicComponent';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { withStyles, withStylesPropTypes, css } from 'react-with-styles';
import isSameDay from '../helpers/isSameDay';
moment.locale('ru')

class MyMetersContainer extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);

        this.setDateToStorage = this.setDateToStorage.bind(this);
        this.setDateToStorage(1,
                              moment().subtract(12, 'months').format('M'),
                              moment().subtract(12, 'months').format('YYYY'),
                              1,
                              moment().format('M'),
                              moment().format('YYYY'));
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
            this.state = {
                focusedInput: null
            };
    }

    componentDidMount() {
        this.metersActions.getMeters();
    }

    setDateToStorage(startDay, startMonth, startYear, endDay, endMonth, endYear) {
        localStorage.setItem('startDay', startDay);
        localStorage.setItem('startMonth', startMonth);
        localStorage.setItem('startYear', startYear);
        localStorage.setItem('endDay', endDay);
        localStorage.setItem('endMonth', endMonth);
        localStorage.setItem('endYear', endYear);
    }

    onDatesChange({ startDate, endDate }) {
        this.setDateToStorage(startDate.format('D'),
                              startDate.format('M'),
                              startDate.format('YYYY'),
                              endDate.format('D'),
                              endDate.format('M'),
                              endDate.format('YYYY'));
        this.metersActions.getMeters();
    }

    onFocusChange(focusedInput) {
        this.setState({ focusedInput });
    }

    render() {
        var startDay = localStorage.getItem('startDay');
        var startMonth = localStorage.getItem('startMonth');
        var startYear = localStorage.getItem('startYear');
        var endDay = localStorage.getItem('endDay');
        var endMonth = localStorage.getItem('endMonth');
        var endYear = localStorage.getItem('endYear');
        var startDate = startDay + "/" + startMonth + "/" + startYear;
        var endDate = endDay + "/" + endMonth + "/" + endYear;
        var startStringDate = dateHelper.dateToString(startMonth, startYear);
        var endStringDate = dateHelper.dateToString(endMonth, endYear);
        ///
        const { focusedInput } = this.state;
        ///
        return (
            <div className="container">
               <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                   <h1 className="h2">Мои показания (кв.{localStorage.getItem('roomNumber')})</h1>
                   <div className="btn-toolbar mb-2 mb-md-0">
                       <DateRangePicker
                                       onDatesChange={this.onDatesChange}
                                       onFocusChange={this.onFocusChange}
                                       enableOutsideDays={true}
                                       isDayBlocked={()=>false}
                                       isOutsideRange={() => false}
                                       isDayHighlighted={()=>false}
                                       focusedInput={focusedInput}
                                       showDefaultInputIcon={true}
                                       startDate={moment(startDate, 'DD/MM/YYYY')}
                                       endDate={moment(endDate, 'DD/MM/YYYY')}
                                       startDateId="datepicker_start_home"
                                       endDateId="datepicker_end_home"
                                       startDatePlaceholderText="Check In"
                                       endDatePlaceholderText="Check Out"
                                       displayFormat="MMM YYYY"
                                   />
                       <div className="btn-group ml-2">
                           <button className="btn btn-sm btn-outline-primary">Share</button>
                           <button className="btn btn-sm btn-outline-primary">Экспорт в Excel</button>
                       </div>
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