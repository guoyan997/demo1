/**
 * Created by GUOYAN on 2018-8-13.
 */
import React, {Component} from 'react';
import './ClockComp.scss'

class ClockComp extends Component {
    constructor(props) {
        super(props);
        this.state = {date: (new Date())};
        this.clickClock = this.clickClock.bind(this)
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    clickClock() {
        const {num} = this.props
        this.props.cliclClockFa(num)
    }

    render() {
        return (
            <div className="mainContent" onClick={this.clickClock}>
                <div className="title-div">the now time is :</div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default ClockComp