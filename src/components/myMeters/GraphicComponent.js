import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, Label, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from 'recharts';
import dateHelper from '../../helpers/dateHelper';

class GraphicComponent extends Component {

    constructor(props) {
        super(props);
        this.calculateData = this.calculateData.bind(this);
    }

    calculateData() {
        var result = [];
        var meters = this.props.meters;

        for (var i = 0; i < meters.length - 2; i++) {
            var hot_w = ((parseInt(meters[i + 1].hot_w) + parseInt(meters[i + 2].hot_w)) / 2) - ((parseInt(meters[i].hot_w) + parseInt(meters[i + 1].hot_w)) / 2);
            var cold_w = ((parseInt(meters[i + 1].cold_w) + parseInt(meters[i + 2].cold_w)) / 2) - ((parseInt(meters[i].cold_w) + parseInt(meters[i + 1].cold_w)) / 2);
            var gas = ((parseInt(meters[i + 1].gas) + parseInt(meters[i + 2].gas)) / 2) - ((parseInt(meters[i].gas) + parseInt(meters[i + 1].gas)) / 2);
            var date = meters[i + 1].date
            result.push({
                hot_w: hot_w,
                cold_w: cold_w,
                gas: gas,
                date: dateHelper.dateToString(date)
            });
        }
        return result;
    }

    render() {
        const legend_hot = [
              { value: 'Расход горячей воды', type: 'line' }
        ];
        const legend_cold = [
              { value: 'Расход холодной воды', type: 'line' }
        ];
        const legend_gas = [
              { value: 'Расход газа', type: 'line' }
        ];

        return  (
            <div>
                <AreaChart width={1000} height={300} data={this.calculateData()} syncId="anyId">
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Legend payload={legend_hot}/>
                    <Tooltip />
                    <Area type='monotone' dataKey='hot_w' stroke='#007bff' fill='#007bff' />
                </AreaChart>
                <AreaChart width={1000} height={300} data={this.calculateData()} syncId="anyId">
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Legend payload={legend_cold}/>
                    <Tooltip />
                    <Area type='monotone' dataKey='cold_w' stroke='#007bff' fill='#007bff' />
                </AreaChart>
                <AreaChart width={1000} height={300} data={this.calculateData()} syncId="anyId">
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Legend payload={legend_gas}/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='gas' stroke='#007bff' fill='#007bff' />
                </AreaChart>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(GraphicComponent);