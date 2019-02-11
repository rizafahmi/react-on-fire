import React, { Component } from 'react';
import { database } from './firebase.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    database.ref('/').on('value', (snapshot) => {
      console.log('DATA CHANGED!', snapshot.val());
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Data from firebase will be here...</p>
        </header>
      </div>
    );
  }
}

export default App;
