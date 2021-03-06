import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'

const App =()=>
{
    return(
    <>
 <div>
 <form class="form-inline" align="right">
        <div class="form-group">
          <input type="text" class="form-control" maxLength="25" placeholder="Search"></input>
          &nbsp;&nbsp;
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </form>
 </div>
<nav className="navbar label-info">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
      Book My Ticket</a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active">
            <Link to="/Latestmovies">Latest Movies </Link></li>
        <li><Link to="/Upcomingmovies">Upcoming Movies</Link></li>       
        <li><Link to="/NearbyEvent">Nearby Event</Link></li> 
      </ul>      
    </div>
  </div>
</nav>
    </>)
}

export default App