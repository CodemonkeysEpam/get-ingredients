import React from 'react';
import './FindFoodTab.scss';

export default class FindFoodTab extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          currentItemsList: this.mealList(),
          currentPlacesList: this.placeList(this.mealList()[0].id),
          currentItem: this.mealList()[0],
          searchItemQuery: "",
          searchPlaceQuery: ""
      }
  }

  mealList = () => {
    let uniqueMealsIDs = [];
    this.props.menusList.forEach(elem => {
        if(uniqueMealsIDs.indexOf(elem.mealId) === -1) {
            uniqueMealsIDs.push(elem.mealId)
        };
    });
    let currentMeals = [];
    Object.keys(uniqueMealsIDs).forEach(key => this.props.itemsList.forEach(meal => {
        if(meal.id === uniqueMealsIDs[key]){
            currentMeals.push(meal)
        }}
    ));
    return currentMeals;
  }

  placeList = (id) => {
    //places for current meal
    let currentMeal = this.props.menusList.filter(el => el.mealId === id);
    let currentPlaces = []
    currentMeal.forEach(el => this.props.placesList.forEach(place => {
        if(place.id === el.placeId){
            let obj = {
                id: place.id,
                name: place.name,
                address: place.address,
                price: el.price
            }
            currentPlaces.push(obj)
        }}
    ));
    return currentPlaces;
  }

  onItemClick = (item) => {
      this.setState({
          currentItem: item,
          currentPlacesList: this.placeList(item.id),
      });
  }

  handleItemInputChange = () => {
    let pattern = new RegExp(this.searchItemInput.value, 'i');
    let filtered = this.mealList().filter((item) => {
        return pattern.test(item.name)
    });
    this.setState({
        searchItemQuery: this.searchItemInput.value,
        currentItemsList: filtered,
        currentItem: filtered[0] || {}
    });
  }

  handlePlaceInputChange = () => {
    let pattern = new RegExp(this.searchPlaceInput.value, 'i');
    let filtered = this.placeList(this.state.currentItem.id).filter((place) => {
        return pattern.test(place.name)
    });
    this.setState({
        searchplaceQuery: this.searchPlaceInput.value,
        currentPlacesList: filtered,
        currentPlace: filtered[0] || {}
    });
  }

  renderItemsList = () => {
    const length = this.state.currentItemsList.length;
    return this.state.currentItemsList.map((item, i) => {
        return (
            <React.Fragment key={i}>
            <div 
                className={item === this.state.currentItem ? "category-body-item active": "category-body-item"}
                onClick={() => this.onItemClick(item)}>
                {item.name}
            </div>
            { length !== i+1 ? <hr></hr> : null }
            </React.Fragment>
        )
    })
  }

  renderPlacesList = () => {
    const length = this.state.currentPlacesList.length;
    return this.state.currentPlacesList.map((place,i) => {
        return (
            <React.Fragment key={i}>
                <div className="place-item">
                    <div className="flex-item-info">
                    <i className="fa fa-map-marker fa-3x" aria-hidden="true"></i>
                        <div className="place-info">
                            <div className="place-name">{place.name}</div>
                            <div className="place-address">{place.address}</div>
                        </div>
                    </div>
                    <div className="place-price">{place.price} $</div>
                    <button className="place-button">ADD TO CARD</button>
                    <button className="place-button">PHONE</button>
                </div>
                { length !== i+1 ? <hr></hr> : null }
            </React.Fragment>
        )
    })
  }

  render () {
    return (
        <React.Fragment>
            <div className="sidebar sidebar-left">
                <div className="search-container">
                    <input type="text" className="searchInput" placeholder="Type the name here" ref={input => this.searchItemInput = input} onChange={this.handleItemInputChange} />
                    <i className="fa fa-search"></i>
                </div>
                <div className="search-result-container">
                    <div className="search-response">
                        {this.renderItemsList()}
                    </div>
                </div>
            </div>
            <div className="center-container">
                <img alt={this.state.currentItem.name} src={window.location.origin + this.state.currentItem.src} />
            </div>
            <div className="sidebar sidebar-right">
                <div className="search-container">
                    <input type="text" className="searchInput" placeholder="Type the name here" ref={input => this.searchPlaceInput = input} onChange={this.handlePlaceInputChange} />
                    <i className="fa fa-search"></i>
                </div>
                <div className="search-result-container">
                    <div className="search-response">
                        {this.renderPlacesList()}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
  }
}
