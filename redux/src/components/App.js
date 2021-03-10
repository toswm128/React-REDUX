import React from "react";
import {HashRouter as Router, Route} from "react-router-dom"
import Home from "../router/Home"
import Detail from "../router/Detail"

function App(){
    return (
        <Router>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/:id">
                <Detail />
            </Route>
         </Router>
    )
}

export default App;