import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as metersActions from '../../actions/metersActions';
import dateHelper from '../../helpers/dateHelper';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { withStyles, withStylesPropTypes, css } from 'react-with-styles';
moment.locale('ru')

class DateFilterComponent  extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
            this.state = {
                focusedInput: null
            };
    }

    onDatesChange({ startDate, endDate }) {
        dateHelper.setDateToStorage(startDate.format('D'),
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
        const { focusedInput } = this.state;

        return (
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
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(DateFilterComponent);