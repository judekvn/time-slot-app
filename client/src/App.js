import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TimeSlot from './components/TimeSlot';


const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/timeslot/:id" component={TimeSlot} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;