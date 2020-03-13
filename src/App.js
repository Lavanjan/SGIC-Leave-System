import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Layouts/Header"
import Sidebar from "./Layouts/Sidebar"
import StaffProfile from "./Pages/staffProfile"
import dashboard from "./Pages/dashboard"
import staffDetails from "./Pages/staffDetails"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header is-small-screen">
    
    <Header/>
    <div class="mdl-layout__drawer">
        <header>AdminPanel</header>
        <div class="scroll__wrapper" id="scroll__wrapper">
            <div class="scroller" id="scroller">
                <div class="scroll__container" id="scroll__container">
    <Sidebar/>
    </div>
    </div>
    </div>
    </div>
    {/* </div> */}
    {/* <div class='scroller__bar' id="scroller__bar"></div> */}
    
    <Switch>
    {/* <main class="mdl-layout__content">    */}

            {/* <div class="mdl-grid mdl-cell mdl-cell--9-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone mdl-cell--top"> */}
       {/* <Route path = "/dashboard" component = {dashboard}/> */}
       <div class="mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--4-col-phone">
       <Route path = "/staffDetails" component = {staffDetails}/>

      {/* </main> */}
      {/* </div> */}
      </div>
    </Switch>
   
   
   </div>
    </BrowserRouter>
    
    
  );
  }
}

export default App;
