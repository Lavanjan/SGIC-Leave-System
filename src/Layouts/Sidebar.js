import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <nav class="mdl-navigation">
                        <a class="mdl-navigation__link">
                            
                            <i class="material-icons" role="presentation">dashboard</i>
                            Dashboard
                        </a>
                        {/* <div class="sub-navigation">
                            <a class="mdl-navigation__link">
                                <i class="material-icons">view_comfy</i>
                              Staff Profile
                                <i class="material-icons">keyboard_arrow_down</i>
                            </a>
                            <div class="mdl-navigation">
                                <a class="mdl-navigation__link" href="#">
                                    Add Staff
                                </a>
                                <a class="mdl-navigation__link" href="#">
                                    View Details
                                </a>
                                <a class="mdl-navigation__link" href="#">
                                    Edit
                                </a>
                                {/* <a class="mdl-navigation__link" href="ui-form-components.html">
                                    Forms
                                </a>
                                <a class="mdl-navigation__link" href="ui-icons.html">
                                    Icons
                                </a>
                                <a class="mdl-navigation__link" href="ui-typography.html">
                                    Typography
                                </a>
                                <a class="mdl-navigation__link" href="ui-tables.html">
                                    Tables
                                </a> */}
                            {/* </div> */}
                        {/* </div> */} 
                        <a class="mdl-navigation__link" href = "/staffDetails">
                            <i class="material-icons">people</i>
                            Staff Details
                            </a>
                      
                        <a class="mdl-navigation__link" href="#">
                            <i class="material-icons">person_add</i>
                            Add Staff
                        </a>
                        <a class="mdl-navigation__link" href="#">
                            <i class="material-icons">move_to_inbox</i>
                            Edit Staff
                        </a>
                        <a class="mdl-navigation__link" href="#">
                            <i class="material-icons" role="presentation">person</i>
                            Account
                        </a>
                        <a class="mdl-navigation__link" href="#">
                            <i class="material-icons" role="presentation">map</i>
                            Maps
                        </a>
                        <a class="mdl-navigation__link" href="charts.html">
                            <i class="material-icons">multiline_chart</i>
                            Charts
                        </a>
                        <div class="sub-navigation">
                            <a class="mdl-navigation__link">
                                <i class="material-icons">pages</i>
                                Pages
                                <i class="material-icons">keyboard_arrow_down</i>
                            </a>
                            <div class="mdl-navigation">
                                <a class="mdl-navigation__link" href="login.html">
                                    Sign in
                                </a>
                                <a class="mdl-navigation__link" href="sign-up.html">
                                    Sign up
                                </a>
                                <a class="mdl-navigation__link" href="forgot-password.html">
                                    Forgot password
                                </a>
                                <a class="mdl-navigation__link" href="404.html">
                                    404
                                </a>
                            </div>
                        </div>
                        <div class="mdl-layout-spacer"></div>
                        <hr></hr>
                        <a class="mdl-navigation__link" href="#">
                            <i class="material-icons" role="presentation">help outline</i>
                            Help!
                        </a>
                    </nav>
  );
}

export default Sidebar;