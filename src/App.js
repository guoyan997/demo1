import React, {Component} from 'react';
import MainRouter from './router/MainRouter'
import './App.scss';
import request from './util/fetchTool'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wendu: 0,
            aaa: ''
        }
    }
    async getBeiJingTemp () {
        const { data } = await request('/api/weather_mini?city=北京',{method: 'GET'})
        this.setState(
            {wendu: data.wendu}
        )
    }
    async getMockData () {
        const { data } = await  request(' https://easy-mock.com/mock/5b73876946d8b26cf3b14f1e/example/mytest',{method: 'GET'})
        this.setState(
            {aaa: data.aaa}
        )
    }
    componentDidMount () {
        this.getBeiJingTemp()
        this.getMockData()
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>测试路由</h1>
                    <h1>北京温度是：{this.state.wendu}</h1>
                    <h1>从在线的easy-mock获取值：{this.state.aaa}</h1>
                </header>
                <MainRouter></MainRouter>
            </div>
        );
    }
}

export default App;
