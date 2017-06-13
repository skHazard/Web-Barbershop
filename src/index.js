import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './app';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Services from './components/Services';
import Masters from './components/Masters';
import Works from './components/Works';
import Contacts from './components/Contacts';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/for-men" component={Men}/>
            <Route path="/for-women" component={Women}/>
            <Route path="/services" component={Services}/>
            <Route path="/masters" component={Masters}/>
            <Route path="/works" component={Works}/>
            <Route path="/contacts" component={Contacts}/>
        </Route>
    </Router>
), document.getElementById('app'));
