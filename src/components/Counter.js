/**
 * Created by GUOYAN on 2018-8-15.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { increaseAction, desCreaseAsync, getBeijingTempAction } from '../store/action'
class Counter extends Component {
    constructor(props, context) {
        super(props, context) // 加上context
        this.state = {
            aaa: 1
        }
    }
    componentDidMount() {
        // const { store } = this.context;
        // debugger
        // const state = store.getState();
        // debugger
        // console.log(state)
    }
    render() {
        const { value, strList, onIncreaseClick,  onDescreaseClick, getBeijingTemp, onAddList} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick.bind(this, 1)}>Increase</button>
                <button onClick={onDescreaseClick.bind(this, 2)}>Descrease</button>
                <button onClick={getBeijingTemp.bind(this, 2)}>获取北京的温度到counter</button>
                <br/>
                <button onClick={onAddList}>addList</button>
                <ul>
                    {
                        strList.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

//定义函数，把state与该组件的props关联起来
function mapStateToProps(state) {
    return {
        // 将state.count的值绑定到该组件的props的value上
        value: state.counter.count,
        strList: state.other.list
    }
}
//定义函数，把一些action事件与该组件的props关联起来
function mapDispatchToProps(dispatch) {
    return {
        // 将action:increaseAction绑定到该组件的props的onIncreaseClick事件上,  加法是同步，减法使用的是异步
        onIncreaseClick: (data) => dispatch(increaseAction(data)), // 这个直接发送action，同步修改值, increaseAction是个函数，返回一个action,所以要dispatch(increaseAction(data))
        onDescreaseClick: (data) =>dispatch(desCreaseAsync(data)), // 这个是异步发送请求，然后在异步的回调里再发送action，修改值
        getBeijingTemp: () => dispatch(getBeijingTempAction()), // 这个是异步的获取北京温度，然后放到state中
        onAddList: () => dispatch({type: 'add'})
    }
}
// Action Creator
// const increaseAction = { type: 'increase' }
// 将Counter组件，和redux中的state和 方法结合起来，生成一个高阶组件，导出使用
const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default CounterContainer