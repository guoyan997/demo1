/**
 * Created by GUOYAN on 2018-8-13.
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'
class NotFind extends Component {
    render() {
        return (
            <div>
                <h1>页面不存在</h1>
                <h2>
                    <Link to='/'>返回主页</Link>
                </h2>
            </div>
        )
    }
}
export default NotFind