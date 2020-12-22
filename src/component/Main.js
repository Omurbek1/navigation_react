import React from 'react'
import About from './About'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import { Route, Switch } from "react-router-dom";

export default function Main() {
    return (
        <div>
        <Header/>
            <Switch>
                <Route exact path='/footer' component={Footer} />
                <Route exact path='/' component={Home} />
                <Route exact path='' component={About} />
                <Route exact path='' component={Header} />
            </Switch>
            <Footer/>
        </div>

    )
}
