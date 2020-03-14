import React, { Component } from 'react';
import CarTable from './CarTable';
import CarEdit from './CarEdit';
import CarAdd from './CarAdd';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/cars/edit/:id" component={CarEdit} />
                        <Route path="/cars/add" component={CarAdd} />
                        <Route path="/cars">
                            <div className="container my-3">
                                <Link className="btn btn-info" to="/cars/add">
                                    Add new car
                                </Link>
                            </div>

                            <CarTable />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}
