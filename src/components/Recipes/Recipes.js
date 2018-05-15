import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Recipes.scss';
import RecepiesResources from './RecipesResources';

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      str: "",
      list: RecepiesResources.Recepies,
      images: RecepiesResources.images
    }
  }

  renderRecept(index, str){
    if (this.state.list[index][str]){
      return(
        <div className="recepts">
            {this.state.list[index][str].map((item,i)=>{
              return <div className="recept" key={i}>
                  <img src={item.image} alt=""/>
                  <h1>{item.name}</h1>
                  <h4>Ingredients:</h4>
                  <ul className="ingredients">
                    {item.ingredients.map((ingr, j)=>{
                      return <li>{ingr}</li>
                    })}
                  </ul>
                  <p>{item.recept}</p>
                </div>
            })}
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
      <div className="container">
        <div className="carousel">
          <ImageGallery
            items={this.state.images}
            thumbnailPosition="top"
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={this._onSlide.bind(this)}
            onClick={this._onImageClick.bind(this)}
          />
        </div>
      </div>
      {this.renderRecept(this.state.currentIndex, this.state.str)}
      </div>
    );
  }
}
