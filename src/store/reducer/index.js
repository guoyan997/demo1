/**
 * Created by GUOYAN on 2018-8-15.
 */
function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + action.data }
        case 'decrease':
            return { count: count - action.data }
        case 'GET_WEATHER_SUCCESS':
            return { count: parseInt(action.payload.wendu) }
        default:
            return state
    }
}
export default counter