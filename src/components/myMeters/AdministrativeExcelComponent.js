import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Workbook from 'react-excel-workbook'
import dateHelper from '../../helpers/dateHelper';

class AdministrativeExcelHouseComponent  extends Component {

    render() {
        const fileName = "Показания по дому за " + dateHelper.dateToString(localStorage.getItem('administrativeMonth'), localStorage.getItem('administrativeYear')) + ".xlsx";

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    room: element.room,
                    energy: element.energy,
                    hot_w: element.hot_w,
                    cold_w: element.cold_w,
                    gas: element.gas,
                    month: element.month,
                    year: element.year,
                });
            });
        }

        return (
            <Workbook filename={fileName} element={<button style={{marginLeft: '10px'}} className="btn btn-lg btn-outline-primary">Экспорт в Excel</button>}>
                <Workbook.Sheet data={metersArray} name="Мои показания">
                    <Workbook.Column label="Номер квартиры" value={row => row.room}/>
                    <Workbook.Column label="Электроэнергия" value={row => row.energy}/>
                    <Workbook.Column label="Горячая вода" value={row => row.hot_w}/>
                    <Workbook.Column label="Холодная вода" value={row => row.cold_w}/>
                    <Workbook.Column label="Газ" value={row => row.gas}/>
                </Workbook.Sheet>
            </Workbook>
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.administrativeMeters.meters
    };
}

export default connect(mapStateToProps)(AdministrativeExcelHouseComponent);