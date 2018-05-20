import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'reactstrap';
import { EditingState } from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, TableEditRow, TableEditColumn} from '@devexpress/dx-react-grid-bootstrap4';

const getRowId = row => row.id;


class TableComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns: [
                { name: 'name', title: 'Name' },
                { name: 'sex', title: 'Sex' },
                { name: 'city', title: 'City' },
                { name: 'car', title: 'Car' }
            ],
            rows: [
                { name: 0, sex: 'DevExtreme', city: 'DevExpress', car: 'car'},
                { name: 0, sex: 'DevExtreme', city: 'DevExpress', car: 'car'}
            ]
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }) {
        let { rows } = this.state;
        if (added) {
            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            rows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row
                }))
            ];
        }

        if (changed) {
            rows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }

        if (deleted) {
            const deletedSet = new Set(deleted);
            rows = rows.filter(row => !deletedSet.has(row.id));
        }

        this.setState({ rows });
    }

    render() {
        const { rows, columns } = this.state;

        return (
            <Card>
                <Grid
                    rows={rows}
                    columns={columns}
                    getRowId={getRowId}
                >
                    <EditingState onCommitChanges={this.commitChanges} />
                    <Table />
                    <TableHeaderRow />
                    <TableEditRow />
                    <TableEditColumn
                        showAddCommand
                        showEditCommand
                        showDeleteCommand
                    />
                </Grid>
            </Card>
        );
    }
}

function mapStateToProps (state) {
    return {
         basket: state.basket
    };
}

export default connect(mapStateToProps)(TableComponent);