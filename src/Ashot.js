import React from 'react';
import './Ashot.scss';
import ImageGallery from 'react-image-gallery';

export default class Ashot extends React.Component {

  renderShrink(){
    return(
      <div>
        <div className="shrimp">
          <div className="shrimp-body"></div>
          <div className="tail-meat hovered"></div>
        </div>
        <div className="caption">Shrimp</div>
      </div>
    );
  }

  renderKnives(){
    return (
      <div>
        <div className="knives">
          <div className="knives-french-or-chef hovered"></div>
          <div className="knives-boning hovered"></div>
          <div className="knives-filleting hovered"></div>
          <div className="knives-cleaver hovered"></div>
          <div className="knives-carving hovered"></div>
          <div className="knives-fork hovered"></div>
          <div className="knives-slicing hovered"></div>
          <div className="knives-scimitar hovered"></div>
          <div className="knives-butcher hovered"></div>
        </div>
        <div className="caption">Knives</div>
      </div>
      
    );
  }

  render () {
    const images = [
      {
        renderItem: this.renderShrink,
        thumbnail: 'icons/1x/shrink.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Shrimp"  
      },
      {
        renderItem: this.renderKnives,
        thumbnail: 'icons/1x/knives.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Knives" 
      },
    ]

    return (
      <div className="carousel">
      <ImageGallery 
        items={images} 
        thumbnailPosition="top" 
        showFullscreenButton={false}
        showPlayButton={false}
        />
      </div>
    );
  }
}