import React from 'react';

class Downvote extends React.Component {
  render() {
    return (
        <button onClick={() => {
          this.props.downvote()
        }}>Down</button>
    )
  }
}

export default Downvote;