import React, { Fragment, PureComponent } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Upcomingmovies from './Upcomingmovies'
import Latestmovies from './Latestmovies'
import NearbyEvent from './NearbyEvent'
import Header from './Header'
const Routing =()=>{
return(
    <BrowserRouter>
     <Header/>
    <div>
        <Route exact path="/" component={Latestmovies}/>
        <Route  path="/Latestmovies" component={Latestmovies}/>
        <Route  path="/Upcomingmovies" component={Upcomingmovies}/>
        <Route  path="/NearbyEvent" component={NearbyEvent}/>
    </div>
    </BrowserRouter>
    )
}
export default Routing;