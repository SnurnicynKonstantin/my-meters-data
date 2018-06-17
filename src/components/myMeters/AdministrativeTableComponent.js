import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BootstrapTable, TableHeaderColumn, InsertButton, InsertModalFooter} from 'react-bootstrap-table';
import * as metersActions from '../../actions/metersActions';
import dateHelper from '../../helpers/dateHelper';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-datepicker/dist/react-datepicker.css';

class AdministrativeTableComponent extends Component {

    render() {

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    room: element.room,
                    hot_w: element.hot_w,
                    cold_w: element.cold_w,
                    gas: element.gas,
                    month: element.month,
                    year: element.year,
                });
            });
        }

        return  (
            <BootstrapTable data={metersArray} striped hover>
                  <TableHeaderColumn dataField='room' isKey>Номер квартиры</TableHeaderColumn>
                  <TableHeaderColumn dataField='hot_w'>Горячая вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='cold_w'>Холодная вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='gas'>Газ</TableHeaderColumn>
              </BootstrapTable>
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.administrativeMeters.meters,
    };
}

export default connect(mapStateToProps)(AdministrativeTableComponent);