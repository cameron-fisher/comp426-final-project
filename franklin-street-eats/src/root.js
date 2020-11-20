import { Switch, Route, HashRouter } from "react-router-dom";
import Topo from './topo';
import Home from './home'
import React from 'react';

const Root = (
    <HashRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/topo" component={Topo}/>
                <Route component={Home}/>
            </Switch>
        </div>
    </HashRouter>
);

export default Root;