/**
 * Created by GUOYAN on 2018-8-13.
 */
import React, {Component} from 'react';
import BarChart from './BarChart'

class EchartsTest extends Component {
    constructor(props) {
        super(props);
        this.state = {list: [5, 20, 36, 10, 10, 20]};
    }
    optionData = {
        title: { text: 'ECharts 入门示例,使用高阶函数' },
    }

    render() {
        return (
            <div id="main" style={{width: 400, height: 400}}>
                <BarChart chartData={this.state.list} option={this.optionData}></BarChart>
            </div>
        );
    }
}

export default EchartsTest;