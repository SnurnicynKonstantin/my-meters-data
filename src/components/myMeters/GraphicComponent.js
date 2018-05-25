import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { AreaChart, Label, XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend } from 'recharts';

class GraphicComponent extends Component {

    constructor(props) {
        super(props);
        this.calculateData = this.calculateData.bind(this);
        this.calculateDate = this.calculateDate.bind(this);
        this.calculateDate2 = this.calculateDate2.bind(this);
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
                date: this.calculateDate(date)
            });
        }
        return result;
    }

    calculateDate(date) {
        var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        var splittedDate = date.split("-");
        return months[parseInt(splittedDate[1]) -1] + " " + splittedDate[0];
    }

        calculateDate2(date, rt, rrt) {
            console.log(date);
            console.log(rt);
            console.log(rrt);
            return date;
        }

    render() {
        const data = [
              {name: 'Page A', uv: 4000},
              {name: 'Page B', uv: 3000},
              {name: 'Page C', uv: 2000},
              {name: 'Page D', uv: 2780},
              {name: 'Page E', uv: 1890},
              {name: 'Page F', uv: 2390},
              {name: 'Page G', uv: 3490}
        ];
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
    console.log("Graphic", state);
    return {
         meters: state.meters
    };
}

export default connect(mapStateToProps)(GraphicComponent);