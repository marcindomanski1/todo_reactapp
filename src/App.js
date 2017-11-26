import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
//import Form from "./Components/Form/index";      //nazwe pliku mozna pominac jesli plik ma nazwe index
//import Form from "./Components/Form/index.js";   //nazwe pliku mozna pominac jesli plik ma nazwe index

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/todo' component={Todo}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/form' component={Form}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
