import React from 'react';

const List = ({ posts, handleUpvote, handleDownvote }) => {
  const sortByVote = (a, b) =>
    (posts[b].upvote || 0 - posts[b].downvote || 0) -
    (posts[a].upvote || 0 - posts[b].downvote || 0);
  return (
    <div className="my-6 mx-3 font-sans text-2xl text-grey-darker">
      {Object.keys(posts)
        .sort(sortByVote)
        .map((key) => (
          <div
            key={key}
            className="flex bg-blue-lightest shadow border rounded p-6 my-3"
          >
            <div className="buttons text-4xl pr-6">
              <div className="upvoteContainer">
                <button onClick={(e) => handleUpvote(e, posts[key], key)}>
                  🔼
                </button>
              </div>

              <div className="upvoteContainer">
                <button onClick={handleDownvote}>🔽</button>
              </div>
            </div>
            <div className="content">
              <div className="title text-4xl">{posts[key].title}</div>
              <div className="votes text-grey py-2 px-3">
                <span role="img" aria-label="thumbs-up" className="pr-2">
                  👍
                  <span className="pl-2">{posts[key].upvote || 0}</span>
                </span>{' '}
                <span role="img" aria-label="thumbs-down">
                  👎
                  <span className="pl-2">{posts[key].downvote || 0}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
