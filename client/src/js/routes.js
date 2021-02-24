import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AnimalPage from './components/PageAnimal';
import LoginPage from './components/PageLogin';

export default (
        <Switch>
            <Route exact path="/" component={AnimalPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
);