import React from 'react';
import Places from './Places';
import GoogleMapReact from 'google-map-react';
import SimpleMap from './GoogleMap'

export default class FindYourPlace extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            currentPlacesList: Places.PlacesList,
            searchPlaceQuery: "",
            currentPlace: Places.PlacesList[0]
        }
    }

    renderPlacesList = () => {
        return this.state.currentPlacesList.map(place => {
            return (
                <div className="place-item">
                    <div className="flex-item-info">
                    <a href="#"><i className="fa fa-map-marker fa-3x" aria-hidden="true"></i></a>
                        <div className="place-info">
                            <div className="place-name">{place.name}</div>
                            <div className="place-address">{place.address}</div>
                        </div>
                    </div>
                    <div className="place-description">{place.description}</div>
                    <button class="place-button">ADD TO CARD</button>
                    <button class="place-button">PHONE</button>
                </div>
            )
        })
    }

    handlePlaceInputChange = () => {
        let pattern = new RegExp(this.searchPlaceInput.value, 'i');
        let filtered = Places.PlacesList.filter((place) => {
            return pattern.test(place.name)
        });
        this.setState({
            searchplaceQuery: this.searchPlaceInput.value,
            currentPlacesList: filtered,
            currentPlace: filtered[0] || {}
        });
    }
    

    render () {
        return (
            <div id="find-your-place-body">
                <div className="find-tab-body">
                    <div className="center-container">
                        <SimpleMap lat={this.state.currentPlace.lat} lng={this.state.currentPlace.lng} name={this.state.currentPlace.name}/>
                    </div> 
                    <div class="sidebar sidebar-right">
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
            </div>
        );
    }
}