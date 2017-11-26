import React, {Component} from 'react';

class Counter
    extends Component {
    constructor(myAwesomeProps) {
        super(myAwesomeProps);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
            count: 0
        }
    }

    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        });
    }

    // componentWillMount() {
    //     console.log('Jestem w will mount')
    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === 'Warszawa') {
            return false;
        }
        if (nextState.count === 100) {
            return false;
        }
        return true;
    }

    // componentWillReceiveProps(nextProps) {
    //     //operacje na stanie
    //     this.props.name //dotychczasowa wlasciwosc
    //     nextProps.name //nastepna
    // }

    render() {
        return <div>
            <h1>I have value: {this.state.count}</h1>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
        </div>
    }

    // componentDidMount() {
    //     console.log("Jestem w did Mount")
    // }

    componentWillUnmount() {
        console.log('Jestem w unmount')
    }


}

export default Counter;