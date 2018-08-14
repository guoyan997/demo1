/**
 * Created by GUOYAN on 2018-8-13.
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Detail extends Component {
    render() {
        return (
            <div>
                <h1>y用户名： {this.props.match.params.name}</h1>
                <h2>
                    <Link to='/'>返回主页</Link>
                </h2>
            </div>
        )
    }
}
export default Detail