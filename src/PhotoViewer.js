import React from 'react';


class PhotoViewer extends React.Component {
  render() {
    return (
      <div className='photo-gallery'>
      <button onClick={() => {
        this.props.back()
      }}>left</button>
      <img src={this.props.photo} className='photo'/>
      <button onClick={() => {
        this.props.next()
      }}>right</button>
      </div>
    )
  }
}


export default PhotoViewer;