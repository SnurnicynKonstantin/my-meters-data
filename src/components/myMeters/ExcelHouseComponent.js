import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Workbook from 'react-excel-workbook'
import dateHelper from '../../helpers/dateHelper';

class ExcelHouseComponent  extends Component {

    render() {
        const fileName = "Мои показания с " + dateHelper.dateToString(localStorage.getItem('startMonth'), localStorage.getItem('startYear'))
            + " по " + dateHelper.dateToString(localStorage.getItem('endMonth'), localStorage.getItem('endYear')) + ".xlsx";

        var metersArray = [];
        if(Array.isArray(this.props.meters)) {
            this.props.meters.forEach(function(element) {
                metersArray.push({
                    energy: element.energy,
                    hot_w: element.hot_w,
                    cold_w: element.cold_w,
                    gas: element.gas,
                    date: dateHelper.dateToString(element.month, element.year)
                });
            });
        }

        return (
            <Workbook filename={fileName} element={<button style={{marginLeft: '10px'}} className="btn btn-lg btn-outline-primary">Экспорт в Excel</button>}>
                <Workbook.Sheet data={metersArray} name="Мои показания">
                    <Workbook.Column label="Электроэнергия" value={row => row.energy}/>
                    <Workbook.Column label="Горячая вода" value={row => row.hot_w}/>
                    <Workbook.Column label="Холодная вода" value={row => row.cold_w}/>
                    <Workbook.Column label="Газ" value={row => row.gas}/>
                    <Workbook.Column label="Дата" value={row => row.date}/>
                </Workbook.Sheet>
            </Workbook>
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(ExcelHouseComponent);