import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BootstrapTable, TableHeaderColumn, InsertButton, InsertModalHeader, InsertModalFooter} from 'react-bootstrap-table';
import * as metersActions from '../../actions/metersActions';
import dateHelper from '../../helpers/dateHelper';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-datepicker/dist/react-datepicker.css';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            hot_w: "",
            cold_w: "",
            gas: "",
            month: moment().format('M'),
            year: moment().format('YYYY')
        };
        let { dispatch } = this.props;
        this.metersActions = bindActionCreators(metersActions, dispatch);
        this.createCustomInsertButton = this.createCustomInsertButton.bind(this);
        this.createCustomModalFooter = this.createCustomModalFooter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.createCustomModalBody = this.createCustomModalBody.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hotWChange = this.hotWChange.bind(this);
        this.coldWChange = this.coldWChange.bind(this);
        this.gasChange = this.gasChange.bind(this);
        this.onBeforeSaveCell = this.onBeforeSaveCell.bind(this);
    }

    createCustomInsertButton(onClick) {
        return (
            <InsertButton
                btnText='Внести показания'
                btnContextual='btn-primary'
                className='meters-add-btn'
                btnGlyphicon='glyphicon-edit'/>
        );
    }

    createCustomModalHeader(closeModal, save) {
        return (
            <InsertModalHeader
                className='my-custom-modal-header'
                title='Внести показания'/>
        );
    }

    handleSave() {
        console.log('This is my custom function for save event', this.state);
        this.metersActions.createMeters(this.state)
        .then(function(result) {
            if(result.status) {
                Alert.success(result.message, {
                    position: 'top-right',
                    effect: 'slide',
                    offset: 50
                });
            } else {
                Alert.error(result.message, {
                    position: 'top-right',
                    effect: 'slide',
                    offset: 50
                });
            }
            console.log("Create data", result);
        });
        this.setState({hot_w: ""});
        this.setState({cold_w: ""});
        this.setState({gas: ""});
        this.setState({date: moment()});
    }

    createCustomModalFooter(closeModal, save) {
        return (
            <InsertModalFooter
                className='my-custom-class'
                saveBtnText='Сохранить'
                closeBtnText='Закрыть'
                closeBtnContextual='btn-default'
                saveBtnContextual='btn-success'
                closeBtnClass='my-close-btn-class'
                saveBtnClass='my-save-btn-class'
                onSave={ closeModal }
                beforeSave={ this.handleSave }/>
        )
    }

    hotWChange(event) {
        this.setState({hot_w: event.target.value});
    }

    coldWChange(event) {
        this.setState({cold_w: event.target.value});
    }

    gasChange(event) {
        this.setState({gas: event.target.value});
    }

    handleChange(date) {
        this.setState({date: date});
        this.setState({month: date.format('M')});
        this.setState({year: date.format('YYYY')});
        console.log("State", this.state);
    }

    createCustomModalBody(columns, validateState, ignoreEditable) {
        return (
            <div className="modal-body">
                <div className="form-group">
                    <label>Горячая вода</label>
                    <input type="text" placeholder="Горячая вода" className="form-control editor edit-text" value={this.state.hot_w} onChange={this.hotWChange}/>
                </div>
                <div className="form-group">
                    <label>Холодная вода</label>
                    <input type="text" placeholder="Холодная вода" className="form-control editor edit-text" value={this.state.cold_w} onChange={this.coldWChange}/>
                </div>
                <div className="form-group">
                    <label>Газ</label>
                    <input type="text" placeholder="Газ" className="form-control editor edit-text" value={this.state.gas} onChange={this.gasChange}/>
                </div>
                <div className="form-group">
                    <label>Дата</label>
                    <DatePicker
                        selected={this.state.date}
                        onChange={this.handleChange}
                        dateFormat="DD/MM/YYYY"
                        className="form-control editor edit-text"
                    />
                </div>
            </div>
        );
    }

    onBeforeSaveCell(row, cellName, cellValue) {
        if(row[cellName] != cellValue) {
            this.metersActions.updateMeters(row.id, cellName, cellValue)
            .then(function(result) {
                if(result.status) {
                    Alert.success(result.message, {
                        position: 'top-right',
                        effect: 'slide',
                        offset: 50
                    });
                } else {
                    Alert.error(result.message, {
                        position: 'top-right',
                        effect: 'slide',
                        offset: 50
                    });
                }
                console.log("Update data", result);
            });

        }
        return false;
    }

    render() {
        const options = {
          insertBtn: this.createCustomInsertButton,
          insertModalHeader: this.createCustomModalHeader,
          insertModalFooter: this.createCustomModalFooter,
          insertModalBody: this.createCustomModalBody
        };


        const cellEditProp = {
            mode: 'dbclick',
            blurToSave: true,
            beforeSaveCell: this.onBeforeSaveCell
        };

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    id: element.id,
                    hot_w: element.hot_w,
                    hot_bck: element.hot_bck,
                    cold_w: element.cold_w,
                    cold_bck: element.hot_bck,
                    gas: element.gas,
                    gas_bck: element.hot_bck,
                    month: element.month,
                    year: element.year,
                    date: dateHelper.dateToString(element.month, element.year)
                });
            });
        }

        return  (
            <BootstrapTable data={metersArray}  options={ options } cellEdit={ cellEditProp } striped hover insertRow>
                  <TableHeaderColumn dataField='hot_w'>Горячая вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='cold_w'>Холодная вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='gas'>Газ</TableHeaderColumn>
                  <TableHeaderColumn dataField='date' isKey>Дата</TableHeaderColumn>
              </BootstrapTable>
        );
    }
}

function mapStateToProps (state) {
    console.log("Tablee", state);
    return {
         meters: state.meters,
    };
}

export default connect(mapStateToProps)(TableComponent);