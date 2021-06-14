import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App () {
    const showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    };

    return (
        <Router>
            <div>
                <Menu />
                <div className="container">
                    <div className="row">
                        {showContentMenus(routes)}
                    </div>
                </div>
            </div>
        </Router>
    );
};
