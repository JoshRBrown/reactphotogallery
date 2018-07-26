import React from 'react';

class Upvote extends React.Component {
  render() {
    return (
        <button onClick={() => {
          this.props.upvote()
        }}> Up </button>
    )
  }
}

export default Upvote;