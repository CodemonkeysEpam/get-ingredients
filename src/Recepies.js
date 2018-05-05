import React from 'react';
import './styles/Ashot.scss';
import ImageGallery from 'react-image-gallery';
import AshotResources from './AshotResources';

export default class Ashot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      str: ""
    }
  }

  renderRecept(index, str){
    if (AshotResources.Recepies[index][str]){
      return(
        <div className="recepts">
          <p>{AshotResources.Recepies[index][str]}</p>
          <img src={AshotResources.Recepies[index].img}/>
        </div>
      );
    }
    else return;
  }

  _onSlide(index) {
    this.setState({currentIndex: index});
  }

  _onImageClick(event){
    let temp = event.target.className.split(" ");
    this.setState({str: temp[0]});
  }

  render () {
    return (
      <div>
        <div className="carousel">
          <ImageGallery
            items={AshotResources.images}
            thumbnailPosition="top"
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={this._onSlide.bind(this)}
            onClick={this._onImageClick.bind(this)}
          />
        </div>
        {this.renderRecept(this.state.currentIndex, this.state.str)}
      </div>
    );
  }
}
