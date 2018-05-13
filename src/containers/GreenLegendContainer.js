import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class GreenLegendContainer extends Component {

    render() {
        return (
            <div className="green-legend">
                <div className="green-legend-item green-legend-item-1">
                    <div className="green-legend-item-image" alt="33 см"/>
                    <div className="green-legend-item-text">Мы делаем большую<br/>пиццу – 33 см</div>
                </div>
                <div className="green-legend-item green-legend-item-2">
                    <div className="green-legend-item-image" alt="2–3 мм"/>
                    <div className="green-legend-item-text">На тонком тесте,<br/>всего 2–3 мм</div>
                </div>
                <div className="green-legend-item green-legend-item-3">
                    <div className="green-legend-item-image" alt="8 кусков"/>
                    <div className="green-legend-item-text">И разрезаем<br/>на 8 кусков</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: null//state.user
    };
}

export default connect(mapStateToProps)(GreenLegendContainer);