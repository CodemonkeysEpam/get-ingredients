import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Recipes.scss';
import RecepiesResources from './RecipesResources';
import { connect } from 'react-redux'

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      str: ""
    }
  }

  renderRecept(index, str){
    if (RecepiesResources.Recepies[index][str]){
      return(
        <div className="recepts">
          <p>{RecepiesResources.Recepies[index][str]}</p>
          <img src={RecepiesResources.Recepies[index].img} alt=""/>
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
      <div className="container">
        <div className="carousel">
          <ImageGallery
            items={RecepiesResources.images}
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

export default connect(
    state => ({}),
    dispatch => ({})
)(Recipes);
