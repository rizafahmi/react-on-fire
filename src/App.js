import React, { Component } from 'react';
import { database } from './firebase.js';

import List from './components/List.js';
import Add from './components/Add.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      newData: ''
    };

    this.dbRef = null;
  }
  handleChange = (e) => {
    const newData = e.target.value;
    this.setState({
      newData
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.dbRef.push({ title: this.state.newData, upvote: 0, downvote: 0 });
  };
  componentDidMount() {
    this.dbRef = database.ref('/posts');
    this.dbRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <Add
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {data ? <List posts={data} /> : <h2>Loading...</h2>}
      </div>
    );
  }
}

export default App;
