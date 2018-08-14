import React, { Component } from 'react';
import  { CommonChart } from './CommonChart'
import '../assets/js/rem'

// 使用装饰器模式，使用高阶组件，给echarts图添加
@CommonChart
class BarChart extends Component {
    getOption () {
        let option = {
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: []
            }]
        }
        option.series[0].data = this.props.chartData
        return option
    }


    render() {
        return (
            <div id={this.props.chartId} style={{ width: window.lib.rem2px(window.lib.px2rem(400)), height: window.lib.rem2px(window.lib.px2rem(400)) }}></div>
        );
    }
}

// export default CommonChart(BarChart);
export default BarChart