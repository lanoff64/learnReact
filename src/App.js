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
import NameForm from "./components/HeadNavContent/Content/Forms/Forms";
import EssayForm from "./components/HeadNavContent/Content/Forms/Textarea";
import FlavorForm from "./components/HeadNavContent/Content/Forms/Select";
import Reservation from "./components/HeadNavContent/Content/Forms/Reservaction";
import Calculator from "./components/HeadNavContent/Content/CalculatorOfWater/Calculator";
import FilterableProductTable from "./components/HeadNavContent/Content/Product/FilterableProductTable";

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

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
                <Route path={'/forms'}
                       render={()=> <NameForm /> }/>
                <Route path={'/formsTextArea'}
                       render={()=> <EssayForm /> }/>
                <Route path={'/flavorForm'}
                       render={()=> <FlavorForm /> }/>
                <Route path={'/reservation '}
                       render={()=> <Reservation  /> }/>

                <Route path={'/calculator'}
                       render={()=> <Calculator /> }/>

                <Route path={'/product'}
                       render={()=> <FilterableProductTable products={PRODUCTS} /> }/>

            </div>


        </div>
    );
}

export default App;
