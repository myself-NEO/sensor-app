import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { SensorList, SensorInsert, SensorUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/sensor/list" exact component={SensorList} />
                <Route path="/sensor/create" exact component={SensorInsert} />
                <Route
                    path="/sensor/update/:id"
                    exact
                    component={SensorUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
