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

        </nav>


    );


}

export default Navbar;