import React, { Component } from 'react'; 
import axios from 'axios';

class CounterClick extends Component {

state = {
    counter: '0', 
} 


constructor() {
    super();

    this.state = {
        counter: '0', 
    };
}


 increaseCounter() {
    fetch('/api/increase/')
    .then(res => { 
            console.log(res.data)
                this.counter= res.data.response_text;
    })
}

render() {
    return (
    <div> <h2>Click counter</h2>
        <button onClick={this.increaseCounter}>Click me</button>
    <p>Clicks so far {this.state.counter}</p>
        </div>
    );
}

}

export default CounterClick; 