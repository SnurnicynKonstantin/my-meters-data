import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn, InsertButton} from 'react-bootstrap-table';
import dateHelper from '../../helpers/dateHelper';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
        this.createCustomInsertButton = this.createCustomInsertButton.bind(this);
        this.handleInsertButtonClick = this.handleInsertButtonClick.bind(this);
    }
    //Table custom component
    onAfterInsertRow(row) {
        console.log("Row", row);
    }

handleInsertButtonClick(onClick) {
  // Custom your onClick event here,
  // it's not necessary to implement this function if you have no any process before onClick
  console.log('This is my custom function for InserButton click event');
//  onClick();
}

createCustomInsertButton(onClick) {
  return (
    <InsertButton
      btnText='CustomInsertText'
      btnContextual='btn-warning'
      className='my-custom-class'
      btnGlyphicon='glyphicon-edit'
      onClick={ this.handleInsertButtonClick(onClick) }/>
  );
}

    render() {
        const options = {
          insertBtn: this.createCustomInsertButton()
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
            <BootstrapTable data={metersArray}  options={ options } striped hover>
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