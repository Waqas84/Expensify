import React from 'react';
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Link, 
    NavLink 
} from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import Create from '../components/Create';
import Help from '../components/Help';
import Edit from '../components/Edit';
import PageNotFound from '../components/PageNotFound';
import Add from '../components/Add';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={DashBoard} exact={true} />        
            <Route path="/add" component={Add} />        
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/help" component={Help} />
            <Route component={PageNotFound} />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;