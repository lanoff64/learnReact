import React from "react";
import './App.css';
import HelloWorld from "./components/HeadNavContent/Content/HelloWorld/HelloWorld";
import Clock from "./components/HeadNavContent/Content/Clock/Clock";
import Header from "./components/HeadNavContent/Header/Header";
import Navbar from "./components/HeadNavContent/NavBar/Navbar";
import {Route} from "react-router-dom";
import Toggle from "./components/HeadNavContent/Content/Toggle/Toggle";
import Greeting from "./components/HeadNavContent/Content/Greeting/Greeting";
import LoginControl from "./components/HeadNavContent/Content/LoginControl/LoginControl";

const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>

            <div className="Content-wrapper">
                <Route path={'/helloWorld'} component={HelloWorld}/>
                <Route path={'/clock'} component={Clock}/>
                <Route path={'/toggle'} component={Toggle}/>
                <Route path={'/greeting'}
                       render={()=> <Greeting isLoggedIn={false} /> }/>
                <Route path={'/logincontrol'}
                       render={()=> <LoginControl /> }/>




            </div>


        </div>
    );
}

export default App;
