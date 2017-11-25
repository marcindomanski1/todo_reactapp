import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path='/' component={Dashboard}/>
                    <Route path='/todo' component={Todo}/>
                    <Route path='/counter' component={Counter}/>
                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default App;
