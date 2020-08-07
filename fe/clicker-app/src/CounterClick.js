import React, { Component } from 'react'; 
import axios from 'axios';

class CounterClick extends Component {



constructor(props) {
    super(props);

    this.state = {
        counter: "0", 
    };
    this.getCount = this.getCount.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
}
  componentDidMount(){
    
    this.getCount();
  }

 increaseCounter() {
    fetch('/api/increase/', {
    method: "GET",
    dataType: "JSON",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    }})
    .then(response =>{
        return response.json();
      })
    .then(response => {
        if(response) {

            this.setState({ counter: response.response_text});
        }
        
    }).catch((error) => {
        console.log(error, "catch the hoop")
      });
}

getCount() {
  fetch('/api/clicks/', {
  method: "GET",
  dataType: "JSON",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  }})
  .then(response =>{
      return response.json();
    })
  .then(response => {
      if(response) {

          this.setState({ counter: response.response_text});
      }
      
  }).catch((error) => {
      console.log(error, "catch the hoop")
    });
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