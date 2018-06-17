import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as metersActions from '../../actions/metersActions';
import dateHelper from '../../helpers/dateHelper';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { withStyles, withStylesPropTypes, css } from 'react-with-styles';
moment.locale('ru')

class AdministrativeDateFilterComponent  extends Component {

    constructor(props) {
        super(props);
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
            this.state = {
                focused: false
            };
    }

    onDatesChange(date) {
        dateHelper.setSingleDateToStorage(date.format('D'),
                              date.format('M'),
                              date.format('YYYY'));
        this.metersActions.getAdministrativeMeters();
    }

    onFocusChange(focused) {
        this.setState({ focused: focused.focused });
    }

    render() {
        var administrativeDay = localStorage.getItem('administrativeDay');
        var administrativeMonth = localStorage.getItem('administrativeMonth');
        var administrativeYear = localStorage.getItem('administrativeYear');
        var administrative = administrativeDay + "/" + administrativeMonth + "/" + administrativeYear;
        const { focused } = this.state;

        return (
            <SingleDatePicker
                id="date_input"

                onDateChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                showDefaultInputIcon={true}
                date={moment(administrative, 'DD/MM/YYYY')}
                focused={focused}
                displayFormat="MMM YYYY"
                enableOutsideDays={true}
                isDayBlocked={()=>false}
                isOutsideRange={() => false}
                isDayHighlighted={()=>false}
            />
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(AdministrativeDateFilterComponent);