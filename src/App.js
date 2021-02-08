import React from "react"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const App = () => {

    return(
        <Router>
        
            <Switch>
                <Route path="/" exact component={LoginPage}/>
                <Route path="/register" component={RegisterPage}/> 
            </Switch>
        </Router>
    )
}

export default App;