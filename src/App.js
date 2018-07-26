import React, { Component } from 'react';
import logo from './logo.svg';
import PhotoViewer from './PhotoViewer';
import Downvote from './Downvote';
import Upvote from './Upvote';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)


    this.state = {
      current: 1,
      photos: [
        {image: 'http://1vze7o2h8a2b2tyahl3i0t68.wpengine.netdna-cdn.com/wp-content/uploads/2018/02/20264896_1385418231547596_1768501032407058786_n.jpg', likes: 0}, 
        {image: 'https://www.camden.gov.uk/ccm/cms-service/stream/image/?image_id=3614116', likes: 0}, 
        {image: 'https://siteimages.agora-gallery.com/galleryPhotos/2016/mezzanine2.jpg', likes: 0}]
    }
  }


  render() {
    return (
      <div>
        <div className='body'>
          <PhotoViewer photo={this.state.photos[this.state.current].image} next={this._nextPhoto} back={this._previousPhoto} />
        </div>
        <div className='voting'>
          <Downvote downvote={this._downvotePhoto}/>
          <Upvote upvote={this._upvotePhoto}/>
        </div>
        <div className='score'>{this.state.photos[this.state.current].likes}</div>
      </div>
    );
  }

  _nextPhoto = () => {
    this.setState({
      current: this.state.current + 1
    })
    if (this.state.current === 2) {
      this.setState({
        current: 0
      })
    }
  }

  _previousPhoto = () => {
    this.setState({
      current: this.state.current - 1
    })
    if (this.state.current === 0) {
      this.setState({
        current: 2
    })
  }
}

  _upvotePhoto = () => {
    let upvotedPhoto = this.state.photos.map((pic) => {
      console.log(pic)
      if(pic.image === this.state.photos[this.state.current].image) {
       return {image: this.state.photos[this.state.current].image,
        likes: pic.likes + 1}
      } else {
        return pic
      }
    })
    console.log(upvotedPhoto)
    this.setState({
      photos: upvotedPhoto
    })
  }

  _downvotePhoto = () => {
    let upvotedPhoto = this.state.photos.map((pic) => {
      console.log(pic)
      if(pic.image === this.state.photos[this.state.current].image) {
       return {image: this.state.photos[this.state.current].image,
        likes: pic.likes - 1}
      } else {
        return pic
      }
    })
    console.log(upvotedPhoto)
    this.setState({
      photos: upvotedPhoto
    })
  }

}


export default App;
