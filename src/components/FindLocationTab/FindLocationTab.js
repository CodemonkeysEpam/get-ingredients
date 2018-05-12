import React from 'react';
import SimpleMap from '../GoogleMap/GoogleMap';
import './FindLocationTab.scss';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

export default class FindLocationTabNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlacesList: this.props.list,
            searchPlaceQuery: "",
            currentPlace: null,
            hoverPlace: null,
            currentView: 'grid'
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            currentPlacesList: nextProps.list
        };
    }

    renderPlacesList = () => {
        if(this.state.currentView === 'map') {
            return this.state.currentPlacesList.map((place, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className="restaurant-item"
                            onMouseEnter={() => this.onPlaceHover(place)}
                            onMouseLeave={() => this.onPlaceHover(null)}
                            onClick={() => this.onPlaceClick(place)}
                        >
                            <RestaurantItem
                                id={place.id}
                                place={place}
                                logo={place.logo}
                                name={place.name}
                                address={place.address}
                                detailsClick={() => this.detailsClick(place)}
                            />
                        </div>
                    </React.Fragment>
                )
            })
        } else {
            return this.state.currentPlacesList.map((place, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className="restaurant-item">
                        <RestaurantItem
                            id={place.id}
                            logo={place.logo}
                            name={place.name}
                            address={place.address}
                            detailsClick={() => this.detailsClick(place)}
                            showOnMapClick={() => this.showOnMapClick(place)}
                        />
                        </div>
                    </React.Fragment>
                )
            })
        }
    }

    handlePlaceInputChange = () => {
        let pattern = new RegExp(this.searchPlaceInput.value, 'i');
        let filtered = this.props.list.filter((place) => {
            return pattern.test(place.name)
        });
        this.setState({
            searchplaceQuery: this.searchPlaceInput.value,
            currentPlacesList: filtered,
            currentPlace: filtered[0] || {}
        });
    }

    onPlaceClick = (place) => {
        this.setState({
            currentPlace: place
        });
    }

    onPlaceHover = (place) => {
        this.setState({
            hoverPlace: place
        });
    }

    detailsClick = (place) => {

    }

    showOnMapClick = (place) => {
        this.setState({
            currentView: 'map',
            currentPlace: place
        })
    }

    changeView = (view) => {
        this.setState({
            currentView: view
        });
    }


    render () {
        return (
            <React.Fragment>
                <div className="findplace-heading">
                    <h3>All Restaurants</h3>
                    <button className="view-button" onClick={()=>{this.changeView("grid")}}>Grid</button>
                    <button className="view-button" onClick={()=>{this.changeView("map")}}>Map</button>
                </div>
                <div className="findplace-search">
                    <input type="text" placeholder="Search by name" className="searchInput" ref={input => this.searchPlaceInput = input} onChange={this.handlePlaceInputChange} />
                    <i className="fa fa-search"></i>
                </div>
                <div className={this.state.currentView === "map" ? 'list-container-map' : 'list-container-grid'}>
                    <div>
                        {this.renderPlacesList()}
                    </div>
                </div>
                {this.state.currentView==="map" && <div className="map-container">
                    <SimpleMap
                    places={this.state.currentPlacesList}
                    currentPlace={this.state.currentPlace}
                    hoverPlace={this.state.hoverPlace}
                    />
                </div>}
            </React.Fragment>
        );
    }
}
