import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Services from '../components/Services';
import ContactPage from '../components/ContactPage';
import About from '../components/About';
import Careers from '../components/Careers';
import PublicRoute from './PublicRoute';

export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute 
                    path="/"
                    component={HomePage}
                    exact={true}
                />
                <PublicRoute 
                    path="/services"
                    component={Services}
                    exact={true}
                />
                <PublicRoute 
                    path="/contact"
                    component={ContactPage}
                    exact={true}
                />
                <PublicRoute 
                    path="/about"
                    component={About}
                    exact={true}
                />
                <PublicRoute 
                    path="/careers"
                    component={Careers}
                    exact={true}
                />
                <Route 
                    component={NotFoundPage}
                />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;