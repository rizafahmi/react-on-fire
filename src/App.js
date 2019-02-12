import React, { Component } from 'react';
import { database } from './firebase.js';

import List from './components/List.js';
import Add from './components/Add.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      newData: ''
    };

    this.dbRef = null;
  }
  componentDidMount() {
    this.dbRef = database.ref('/posts');
    this.dbRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      });
    });
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
  handleUpvote = (e, post, key) => {
    const { title, upvote, downvote } = post;
    this.dbRef.child(`${key}`).set({
      title,
      upvote: post.upvote + 1,
      downvote
    });
  };
  handleDownvote = (e) => {
    console.log('Downvote');
  };
  render() {
    const { data } = this.state;
    return (
      <div className="container mx-auto px-4 py-8">
        <Add
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        {data ? (
          <List
            handleUpvote={this.handleUpvote}
            handleDownvote={this.handleDownvote}
            posts={data}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
  }
}

export default App;
