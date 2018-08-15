/**
 * Created by GUOYAN on 2018-8-15.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'
import {increaseAction, desCreaseAsync} from '../store/action'
class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDescreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDescreaseClick}>Descrease</button>
            </div>
        )
    }
}

//定义函数，把state与该组件的props关联起来
function mapStateToProps(state) {
    return {
        // 将state.count的值绑定到该组件的props的value上
        value: state.count
    }
}
//定义函数，把一些action事件与该组件的props关联起来
function mapDispatchToProps(dispatch) {
    return {
        // 将action:increaseAction绑定到该组件的props的onIncreaseClick事件上,  加法是同步，减法使用的是异步
        onIncreaseClick: () => dispatch(increaseAction),
        onDescreaseClick: () =>dispatch(desCreaseAsync())
    }
}
// Action Creator
// const increaseAction = { type: 'increase' }

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default CounterContainer