import React from "react";
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";



const Navbar = () => {

    return (
        <nav className={classes.navbar}>


            <div className={classes.item}>
                <NavLink to='/helloWorld'  activeClassName={classes.activeLink}>
                    HelloWorld
                </NavLink>

            </div>
            <div className={classes.item}>
                <NavLink to='/clock'  activeClassName={classes.activeLink}>
                    Clock
                </NavLink>

            </div>

            <div className={classes.item}>
                <NavLink to='/toggle'  activeClassName={classes.activeLink}>
                    Toggle
                </NavLink>

            </div>

            <div className={classes.item}>
                <NavLink to='/greeting'  activeClassName={classes.activeLink}>
                    Greeting
                </NavLink>

            </div>
            <div className={classes.item}>
                <NavLink to='/logincontrol'  activeClassName={classes.activeLink}>
                    LoginControl
                </NavLink>

            </div>

            <div className={classes.item}>
                <NavLink to='/forms'  activeClassName={classes.activeLink}>
                    NameForm
                </NavLink>

            </div>

            <div className={classes.item}>
                <NavLink to='/formsTextArea'  activeClassName={classes.activeLink}>
                    TextArea
                </NavLink>

            </div>
            <div className={classes.item}>
                <NavLink to='/flavorForm'  activeClassName={classes.activeLink}>
                    Flavor Form
                </NavLink>

            </div>

            <div className={classes.item}>
                <NavLink to='/reservation'  activeClassName={classes.activeLink}>
                    Reservation
                </NavLink>

            </div>


            <div className={classes.item}>
                <NavLink to='/calculator'  activeClassName={classes.activeLink}>
                    Calculator
                </NavLink>

            </div>

        </nav>


    );


}

export default Navbar;