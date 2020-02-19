import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';
import Home from './pages/home';
import Page404 from './pages/Page404';
import grafica from './pages/grafica';
import PageWelcome from './pages/Bienvenido';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ PageWelcome } />
            <Route exact path="/home" component={ Home } />
            <Route path="/grafica" component={ grafica } />
            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
