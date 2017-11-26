import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.handleTitle = this.handleFormTitle.bind(this);
        this.handleContent = this.handleFormContent.bind(this);
        this.handleCategory = this.handleFormCategory.bind(this);
        this.handleSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title: '',
            content: 'default Content',
            category: 'default Category'
        };
    }

    handleFormTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleFormContent(event) {
        this.setState({
            content: event.target.value
        });
    }

    handleFormCategory(event) {
        this.setState({
            category: event.target.value
        });
    }

    handleFormSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h3>Title: {(this.state.title != '' ? 'PROMOCJA ' + this.state.title : 'Bez Promocji: ')}</h3>
                <p>Content: {this.state.content}</p>
                <p>Category: {this.state.category}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" onChange={this.handleTitle}/>
                        <div>
                            <textarea onChange={this.handleContent}/>
                        </div>
                        <div>
                            <select onChange={this.handleCategory}>
                                <option>Opcja 1</option>
                                <option>Opcja 2</option>
                                <option>Opcja 3</option>
                            </select>
                        </div>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;
