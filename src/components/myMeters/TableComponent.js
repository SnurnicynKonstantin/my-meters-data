import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
    }
    //Table custom component
    onAfterInsertRow(row) {
        console.log("Row", row);
    }

    render() {
        const options = {
          afterInsertRow: this.onAfterInsertRow()
        };

        var metersArray = [];
        this.props.meters.forEach(function(element) {
            metersArray.push({
                hot_w: element.hot_w,
                cold_w: element.cold_w,
                gas: element.gas,
                date: element.date
            });
        });

        return  (
            <BootstrapTable data={metersArray}  insertRow={ true } options={ options } striped hover>
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