import React from "react";
import classes from './HelloWorld.module.css';

const HelloWorld = (props) => {

    return (
        <div>


            <div className={classes.helloWorld}>
                <p>
                    Hello World!!!
                </p>

            </div>


        </div>
    );


}
export default HelloWorld;