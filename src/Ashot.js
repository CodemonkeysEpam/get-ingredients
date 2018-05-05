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

  renderBear(){
    return(
      <div>
        <div className="bear">
            <div className="head hovered"></div>
            <div className="ear hovered"></div>
            <div className="neck hovered"></div>
            <div className="chuck hovered"></div>
            <div className="rib hovered"></div>
            <div className="shotr-loin hovered"></div>
            <div className="loin hovered"></div>
            <div className="rump hovered"></div>
            <div className="tail hovered"></div>
            <div className="brisket hovered"></div>
            <div className="shoulder hovered"></div>
            <div className="short-ribs hovered"></div>
            <div className="plate hovered"></div>
            <div className="flank hovered"></div>
            <div className="round hovered"></div>
            <div className="fore-shank hovered"></div>
            <div className="fore-shank-1 hovered"></div>
            <div className="hind-shank hovered"></div>
            <div className="hind-shank-1 hovered"></div>
            <div className="foot-1"></div>
            <div className="foot-2"></div>
            <div className="foot-3"></div>
            <div className="foot-4"></div>
        </div>
        <div className="caption">Bear</div>
      </div>
    );
  }

  renderBeef(){
    return(
      <div>
        <div className="beef">
            <div className="head hovered"></div>
            <div className="chuck hovered"></div>
            <div className="rib hovered"></div>
            <div className="loin hovered"></div>
            <div className="sirloin hovered"></div>
            <div className="round hovered"></div>
            <div className="brisket hovered"></div>
            <div className="plate hovered"></div>
            <div className="flank hovered"></div>
            <div className="shank hovered"></div>
        </div>
        <div className="caption">Beef</div>
      </div>
    );
  }

  renderPork(){
    return(
      <div>
        <div className="pork">
            <div className="head hovered"></div>
            <div className="arm-shoulder hovered"></div>
            <div className="blade-shoulder hovered"></div>
            <div className="hock hovered"></div>
            <div className="loin hovered"></div>
            <div className="spare-rib hovered"></div>
            <div className="side hovered"></div>
            <div className="leg hovered"></div>
        </div>
        <div className="caption">Pork</div>
      </div>
    );
  }

  renderChicken(){
    return(
      <div>
        <div className="chicken">
          <div className="neck hovered"></div>
          <div className="breast hovered"></div>
          <div className="leg hovered"></div>
          <div className="wing hovered"></div>
          <div className="tail hovered"></div>
          <div className="thign hovered"></div>
        </div>
        <div className="caption">Chicken</div>
      </div>
    );
  }

  renderLamb(){
    return(
      <div>
        <div className="lamb">
          <div className="neck hovered"></div>
          <div className="chuck hovered"></div>
          <div className="sholder hovered"></div>
          <div className="breast hovered"></div>
          <div className="loin hovered"></div>
          <div className="leg hovered"></div>
        </div>
        <div className="caption">Lamb</div>
      </div>
    );
  }

  renderRabbit(){
    return(
      <div>
        <div className="rabbit">
          <div className="head-tail"></div>
          <div className="shoulder hovered"></div>
          <div className="front-leg hovered"></div>
          <div className="saddle hovered"></div>
          <div className="rib hovered"></div>
          <div className="loin hovered"></div>
          <div className="hind-leg hovered"></div>
        </div>
        <div className="caption">Rabbit</div>
      </div>
    );
  }

  renderFish(){
    return (
      <div>
        <div className="fish">
          <div className="head hovered"></div>
          <div className="back hovered"></div>
          <div className="caviar hovered"></div>
          <div className="abdomen-meat hovered"></div>
          <div className="tail-meat hovered"></div>
        </div>
        <div className="caption">Fish</div>
      </div>
    );
  }

  renderCrab(){
    return (
      <div>
        <div className="crab">
          <div className="legs"></div>
          <div className="claw-meat hovered"></div>
          <div className="white-meat hovered"></div>
        </div>
        <div className="caption">Crab</div>
      </div>
    );
  }

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
    const images = [
      {
        renderItem: this.renderBear,
        thumbnail: 'icons/1x/bear.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Bear"
      },
      {
        renderItem: this.renderBeef,
        thumbnail: 'icons/1x/beef.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Beef"
      },
      {
        renderItem: this.renderPork,
        thumbnail: 'icons/1x/pork.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Pork"
      },
      {
        renderItem: this.renderChicken,
        thumbnail: 'icons/1x/chicken.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Chicken"
      },
      {
        renderItem: this.renderLamb,
        thumbnail: 'icons/1x/lamb.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Lamb"
      },
      {
        renderItem: this.renderRabbit,
        thumbnail: 'icons/1x/rabbit.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Rabbit"
      },
      {
        renderItem: this.renderFish,
        thumbnail: 'icons/1x/fish.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Fish"
      },
      {
        renderItem: this.renderCrab,
        thumbnail: 'icons/1x/crab.png',
        thumbnailClass: "ashot-icons-item",
        thumbnailLabel: "Crab"
      },
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
      <div>
        <div className="carousel">
          <ImageGallery
            items={images}
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
