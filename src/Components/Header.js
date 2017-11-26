import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from "./Button/index"; //linki wewnątrz aplikacji


class Header
    extends Component {
    render() {
        return (<div>
                <h1>Header</h1>
                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/todo'>To Do</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                </ul>
                <Button label="OK!" />

            </div>
        );
    }
}

export default Header;