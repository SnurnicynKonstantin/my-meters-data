import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn, InsertButton, InsertModalHeader, InsertModalFooter} from 'react-bootstrap-table';
import dateHelper from '../../helpers/dateHelper';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.createCustomInsertButton = this.createCustomInsertButton.bind(this);
        this.createCustomModalFooter = this.createCustomModalFooter.bind(this);
        this.handleSave = this.handleSave.bind(this);
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
        console.log('This is my custom function for save event', save);
//        save();
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



    render() {
        const options = {
          insertBtn: this.createCustomInsertButton,
          insertModalHeader: this.createCustomModalHeader,
          insertModalFooter: this.createCustomModalFooter
        };

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    hot_w: element.hot_w,
                    cold_w: element.cold_w,
                    gas: element.gas,
                    date: dateHelper.dateToString(element.date)
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