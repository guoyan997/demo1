import React, {Component} from 'react';
import ClockComp from '../components/ClockComp'
import '../App.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {date: (new Date())};
        this.clickHandler = this.clickHandler.bind(this)
    }
    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    }

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    testList = [
        {name: 'gy1', value: 10},
        {name: 'gy2', value: 10},
        {name: 'gy3', value: 10},
        {name: 'gy4', value: 10},
        {name: 'gy5', value: 10}]

    clickHandler(value) {
        // hashHistory.push('/detail/' + value)
        this.props.history.push('/detail/' + value)
    }

    const
    ul0bj = this.testList.map((item, i) => {
        return(<li key={i} onClick={this.clickHandler.bind(this,item.name)}><a>
            <span> {item.name} </span>
            <span>{item.value} </span>
        </a></li> )
    })
    const
    clockObj = {
        num: 5,
        cliclClockFa: (val)=> {
            alert('come from child ' + val)
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ClockComp {...this.clockObj}></ClockComp>
                </header>
                <p className="App-intro">
                    Hello, {this.formatName(this.user)}
                    点击下面列表项，进行路由切换
                </p>
                <ul>{this.ul0bj}</ul>
            </div>
        );
    }
}

export default Home;
