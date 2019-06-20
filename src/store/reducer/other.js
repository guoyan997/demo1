
const list = (state = {list: ['bbb']}, action) => {
    const strlist = state.list
    switch (action.type) {
        case 'add':
            // 重新定义一个新的数组，赋值，这样才能监听到变化
            strlist.push('aaa')
            const list = [...strlist]
            return {list}   // state要以对象的格式返回出，其他页面使用的时候比较方便
        default:
            return state
    }
}
export default list