import React from 'react';

export default class FindFoodTab extends React.Component {
  
  constructor(props) {
      super(props);

      this.state = {
          currentItemsList: this.props.itemsList,
          currentPlacesList: this.props.placesList,
          currentItem: this.props.itemsList[0],
          searchItemQuery: "",
          searchPlaceQuery: ""
      }
  }

  onItemClick = (item) => {
      this.setState({
          currentItem: item
      });
  }

  handleItemInputChange = () => {
    let pattern = new RegExp(this.searchItemInput.value, 'i');
    let filtered = this.props.itemsList.filter((item) => {
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
    let filtered = this.props.placesList.filter((place) => {
        return pattern.test(place.name)
    });
    this.setState({
        searchplaceQuery: this.searchPlaceInput.value,
        currentPlacesList: filtered,
        currentPlace: filtered[0] || {}
    });
  }

  renderItemsList = () => {
    return this.state.currentItemsList.map(item => {
        return <div 
            key={item.name}
            className="category-body-item" 
            onClick={() => this.onItemClick(item)}>{item.name}<hr />
        </div>
    })
  }

  renderPlacesList = () => {
    return this.state.currentPlacesList.map(place => {
        return (
            <div key={place.id} className="place-item">
                <div className="flex-item-info">
                <a href="#"><i className="fa fa-map-marker fa-3x" aria-hidden="true"></i></a>
                    <div className="place-info">
                        <div className="place-name">{place.name}</div>
                        <div className="place-address">{place.address}</div>
                    </div>
                </div>
                <div className="place-description">{place.description}</div>
                <button className="place-button">ADD TO CARD</button>
                <button className="place-button">PHONE</button>
            </div>
        )
    })
  }

  render () {
    return (
            <div className="find-tab-body">
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
            </div>
    );
  }
}