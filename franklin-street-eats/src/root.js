import { Switch, Route, HashRouter } from "react-router-dom";
import Topo from './topo';
import CCS from './ccs';
import Cosmic from './cosmic';
import Lindas from './lindas';
import MedDeli from './meddeli';
import PizzaPress from './pizzapress';
import PurpleBowl from './purplebowl';
import Spicy9 from './spicy9';
import SupDogs from './supdogs';
import Home from './home'
import React from 'react';

const Root = (
    <HashRouter>
        <div>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/topo" component={Topo}/>
                <Route path="/ccs" component={CCS}/>
                <Route path="/cosmic" component={Cosmic}/>
                <Route path="/lindas" component={Lindas}/>
                <Route path="/meddeli" component={MedDeli}/>
                <Route path="/pizzapress" component={PizzaPress}/>
                <Route path="/purplebowl" component={PurpleBowl}/>
                <Route path="/spicy9" component={Spicy9}/>
                <Route path="/supdogs" component={SupDogs}/>
                <Route component={Home}/>
            </Switch>
        </div>
    </HashRouter>
);

export default Root;