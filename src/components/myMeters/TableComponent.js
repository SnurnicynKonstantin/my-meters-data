import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {BootstrapTable, TableHeaderColumn, InsertButton, InsertModalHeader, InsertModalFooter} from 'react-bootstrap-table';
import * as metersActions from '../../actions/metersActions';
import dateHelper from '../../helpers/dateHelper';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: moment(),
            hot_w: "",
            cold_w: "",
            gas: ""
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

    handleSave(save) {
        console.log('This is my custom function for save event', this.state);
        this.metersActions.createMeters(this.state);
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
                onSave={ this.handleSave }/>
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
        this.setState({
            date: date.format("DD/MM/YYYY")
        });
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



    render() {
        const options = {
          insertBtn: this.createCustomInsertButton,
          insertModalHeader: this.createCustomModalHeader,
          insertModalFooter: this.createCustomModalFooter,
          insertModalBody: this.createCustomModalBody
        };

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    hot_w: element.hot_w,
                    cold_w: element.cold_w,
                    gas: element.gas,
                    date: dateHelper.dateToString(element.month, element.year)
                });
            });
        }

        return  (
            <BootstrapTable data={metersArray}  options={ options } striped hover insertRow>
                  <TableHeaderColumn isKey dataField='hot_w'>Горячая вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='cold_w'>Холодная вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='gas'>Газ</TableHeaderColumn>
                  <TableHeaderColumn dataField='date'>Дата</TableHeaderColumn>
              </BootstrapTable>
        );
    }
}

function mapStateToProps (state) {
    console.log("Table", state);
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(TableComponent);