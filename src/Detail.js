import React from 'react';
import { database } from './firebase.js';
import { Link } from 'react-router-dom';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    database.ref(`/posts/${id}`).on('value', (snapshot) => {
      this.setState({ data: snapshot.val() });
    });
  }
  render() {
    return (
      <div>
        {this.state.data === null ? (
          <h3>No data found</h3>
        ) : (
          <pre>{JSON.stringify(this.state.data)}</pre>
        )}
        <Link to="/" className="no-underline my-6">
          <span className="py-2 px-4 shadow border rounded bg-teal font-bold text-white no-underline">
            Back
          </span>
        </Link>
      </div>
    );
  }
}

export default DetailPage;
