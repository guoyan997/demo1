/**
 * Created by GUOYAN on 2018-8-15.
 */
export const increaseAction = { type: 'increase' }
export const descreaseAction = {type: 'decrease'}

export  function desCreaseAsync(){
    //thunk插件的作用，这里可以返回函数
    return dispatch =>{
        //异步结束后，手动执行dispatch
        setTimeout(() => {
            dispatch(descreaseAction)
        }, 1000)
    }
}