import React from 'react';
import './Ashot.scss';
import ImageGallery from 'react-image-gallery';

export default class Ashot extends React.Component {

  renderBear(){
    return(
      <div>
        <div class="bear">
            <div class="head hovered"></div>
            <div class="ear hovered"></div>
            <div class="neck hovered"></div>
            <div class="chuck hovered"></div>
            <div class="rib hovered"></div>
            <div class="shotr-loin hovered"></div>
            <div class="loin hovered"></div>
            <div class="rump hovered"></div>
            <div class="tail hovered"></div>
            <div class="brisket hovered"></div>
            <div class="shoulder hovered"></div>
            <div class="short-ribs hovered"></div>
            <div class="plate hovered"></div>
            <div class="flank hovered"></div>
            <div class="round hovered"></div>
            <div class="fore-shank hovered"></div>
            <div class="fore-shank-1 hovered"></div>
            <div class="hind-shank hovered"></div>
            <div class="hind-shank-1 hovered"></div>
            <div class="foot-1"></div>
            <div class="foot-2"></div>
            <div class="foot-3"></div>
            <div class="foot-4"></div>
        </div>
        <div className="caption">Bear</div>
      </div>      
    );
  }

  renderBeef(){
    return(
      <div>
        <div class="beef">
            <div class="head hovered"></div>
            <div class="chuck hovered"></div>
            <div class="rib hovered"></div>
            <div class="loin hovered"></div>
            <div class="sirloin hovered"></div>
            <div class="round hovered"></div>
            <div class="brisket hovered"></div>
            <div class="plate hovered"></div>
            <div class="flank hovered"></div>
            <div class="shank hovered"></div>
        </div>
        <div className="caption">Beef</div>
      </div>      
    );
  }

  renderPork(){
    return(
      <div>
        <div class="pork">
            <div class="head hovered"></div>
            <div class="arm-shoulder hovered"></div>
            <div class="blade-shoulder hovered"></div>
            <div class="hock hovered"></div>
            <div class="loin hovered"></div>
            <div class="spare-rib hovered"></div>
            <div class="side hovered"></div>
            <div class="leg hovered"></div>
        </div>
        <div className="caption">Pork</div>
      </div>      
    );
  }

  renderChicken(){
    return(
      <div>
        <div class="chicken">
          <div class="neck hovered"></div>
          <div class="breast hovered"></div>
          <div class="leg hovered"></div>
          <div class="wing hovered"></div>
          <div class="tail hovered"></div>
          <div class="thign hovered"></div>
        </div>
        <div className="caption">Chicken</div>
      </div>      
    );
  }

  renderLamb(){
    return(
      <div>
        <div class="lamb">
          <div class="neck hovered"></div>
          <div class="chuck hovered"></div>
          <div class="sholder hovered"></div>
          <div class="breast hovered"></div>
          <div class="loin hovered"></div>
          <div class="leg hovered"></div>
        </div>
        <div className="caption">Lamb</div>
      </div>
    );
  }

  renderRabbit(){
    return(
      <div>
        <div class="rabbit">
          <div class="head-tail"></div>
          <div class="shoulder hovered"></div>
          <div class="front-leg hovered"></div>
          <div class="saddle hovered"></div>
          <div class="rib hovered"></div>
          <div class="loin hovered"></div>
          <div class="hind-leg hovered"></div>
        </div>
        <div className="caption">Rabbit</div>
      </div>
    );
  }

  renderFish(){
    return (
      <div>
        <div class="fish">
          <div class="head hovered"></div>
          <div class="back hovered"></div>
          <div class="caviar hovered"></div>
          <div class="abdomen-meat hovered"></div>
          <div class="tail-meat hovered"></div>
        </div>
        <div className="caption">Fish</div>
      </div>
    );
  }

  renderCrab(){
    return (
      <div>
        <div class="crab">
          <div class="legs"></div>
          <div class="claw-meat hovered"></div>
          <div class="white-meat hovered"></div>
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