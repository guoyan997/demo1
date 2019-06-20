import request from "../../util/fetchTool";
// import { createAction } from 'redux-actions'
/**
 * Created by GUOYAN on 2018-8-15.
 */
// eslint-disable-next-line increase
export const increaseAction = (data) => ({ type: 'increase', data})
// eslint-disable-next-line
export const descreaseAction = (data) =>  ({type: 'decrease', data})

// 模拟异步action
export  function desCreaseAsync(data){
    //thunk插件的作用，这里可以返回函数
    return (dispatch) =>{
        //异步结束后，手动执行dispatch
        setTimeout(() => {
            dispatch(descreaseAction(data))
        }, 1000)
    }
}
// 模拟异步action
export function getBeijingTempAction(){
    return async (dispatch, getState) => { // 由中间件负责调用，dispatch和getState也由中间件负责传入
        const { data } = await request('/api/weather_mini?city=北京',{method: 'GET'})
        dispatch({
            type: 'GET_WEATHER_SUCCESS',
            payload: data
        })
    }
}