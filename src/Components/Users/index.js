import React, {Component} from 'react';

class Users extends Component {

    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {
            users: [{
                name: 'Ala'
            }, {
                name: 'Danuta'
            }, {
                name: 'Jola'
            }]

        }
    }

    fetchData() {
        this.setState({loading: true});
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data =>
                    this.setState({loading: false, users: data}))
        }, 1000)
    }

    renderIndicator() {
        if (this.state.loading) {
            return <div style={{color: 'red', fontSize: 16}}>Loading...</div>;
        }
    }

    render() {
        return (
            <div>
                <h1>Users:</h1>
                {this.renderIndicator()}
                <button onClick={this.fetchData}>Pobierz dane</button>
                {this.state.users.map((user, index) => (
                    <div key={index}>
                        <div>nazwa: {user.name}</div>
                        <div>Login: {user.username}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
