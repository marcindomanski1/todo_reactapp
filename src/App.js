import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from "./Components/Footer";
import TaskContainer from "./Components/Tasks/continer"
import Reboot from 'material-ui/Reboot';
import 'typeface-roboto'
import Task from "./Components/Tasks/task";

class App extends Component {
    render() {
        return (


                <div>
                    <Reboot/>
                    <Header/>
                    <TaskContainer/>
                    <Task/>
                    <Footer/>
                </div>

        );
    }
}

export default App;
