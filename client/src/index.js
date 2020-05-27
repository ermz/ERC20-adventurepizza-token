import React, { Component } from "react";
import ReactDOM from 'react-dom';
import {Explorer, sites} from "adventure-component-library";
import axios from 'axios';
let ethereum = window.ethereum;
var userAddress;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null
    }
  }

  componentDidMount() {
    this.getAccountName();
  }

  async getAccountName() {
    // esling-disable-next-line no-undef
    this.setState({account: await ethereum.enable()}, () => {
      console.log(this.state.account);
      userAddress = this.state.account[0];
    });
  }

  sendAPIRequest() {
    window.alert('Obtained 1 Hamburger Token');
    var apiAddress;
    apiAddress = "http://13/56/163/182:8000/transfer-token";
    axios.post(apiAddress, {
      ticker: "HAMBURGER",
      amount: 1,
      to: userAddress,
      hookUrl: "done",
    }).then(function(res) {
      console.log(res);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return <div className="container">
      <div className="header">
        <h1>Hamburger Happiness</h1>
        <h2>A Nice Juicy Hamburger</h2>
      </div>
      <div className="burger-container">
        <img className="burger" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfawWQiOjEyMDd9&auto=format&fit=crop&w=1204&q=80"/>
      </div>
      <div className="metamask-container">
        <button className="metamask" onClick={this.sendAPIRequest}>Get Hamburger Token</button>
      </div>
      <div className="explorer">
        <Explorer site={sites.ginandjuice}/>
      </div>
    </div>
  }

}

ReactDOM.render(<App />, document.querySelector('#root'));
