/**
 * Created by GUOYAN on 2018-8-13.
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFind from '../pages/NotFind'
import Detail from '../pages/Detail'
import EchartsTest from '../pages/EchartsTest'
import ReduxPage from '../pages/ReduxPage'
import LoadPage from '../pages/LoadingPage'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/Detail/:name' component={Detail}/>
            <Route path='/bar' component={EchartsTest}/>
            <Route path='/redux' component={ReduxPage}/>
            <Route path='/loading' component={LoadPage}/>
            <Route path='/*' component={NotFind}/>
        </Switch>
    </main>
)
export default Main