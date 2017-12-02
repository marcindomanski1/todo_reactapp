import React, {Component} from 'react';
import {Link} from 'react-router-dom'; //linki wewnątrz aplikacji
import Button from "./Button/index";
import Search from "./Search/index";


class Header
    extends Component {
    render() {
        return (<div>
                <h1>Header</h1>

                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/todo'>To Do</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                    <li><Link to='/Form'>Form</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                </ul>
                <Button label="OK!"/>
                <div>
                    <Search/>
                </div>
            </div>
        );
    }
}

export default Header;
