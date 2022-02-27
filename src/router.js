// Packages
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// Pages
import EventList from './pages/EventList/EventList';
import EventRetrieve from './pages/EventRetrieve/EventRetrieve';


const AppRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={EventList} />
            <Route exact path="/event/:eventId/" component={EventRetrieve} />

            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)


export default AppRouter;
