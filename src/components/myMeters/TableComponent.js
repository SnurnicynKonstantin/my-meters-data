import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class TableComponent extends Component {


    render() {
        var metersArray = [];
        this.props.meters.forEach(function(element) {
            metersArray.push({
                hot_w: element.hot_w,
                cold_w: element.cold_w,
                gas: element.gas
            });
        });

        return  (
            <BootstrapTable data={metersArray} striped hover>
                  <TableHeaderColumn isKey dataField='hot_w'>Горячая вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='cold_w'>Холодная вода</TableHeaderColumn>
                  <TableHeaderColumn dataField='gas'>Газ</TableHeaderColumn>
              </BootstrapTable>
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(TableComponent);