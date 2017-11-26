import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event) {
        console.log('Wartosc search: ' + this.searchField.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label> Search:
                        <input type="text" ref={field => this.searchField = field}/>
                        <input type='submit' value='Search'/>
                    </label>
                </form>
            </div>
        );
    }
}

export default Search;