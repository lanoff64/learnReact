import React from "react";
import './App.css';
import HelloWorld from "./components/HeadNavContent/Content/HelloWorld/HelloWorld";
import Clock from "./components/HeadNavContent/Content/Clock/Clock";
import Header from "./components/HeadNavContent/Header/Header";
import Navbar from "./components/HeadNavContent/NavBar/Navbar";
import {Route} from "react-router-dom";
import Toggle from "./components/HeadNavContent/Content/Button/Toggle";

const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>

            <div className="Content-wrapper">
                <Route path={'/helloWorld'} component={HelloWorld}/>
                <Route path={'/clock'} component={Clock}/>
                <Route path={'/toggle'} component={Toggle}/>




            </div>


        </div>
    );
}

export default App;
