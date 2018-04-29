import React from 'react';
import SimpleMap from './GoogleMap';
import './styles/FindLocationTab.scss';

export default class FindLocationTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlacesList: this.props.list,
            searchPlaceQuery: "",
            currentPlace: this.props.list[0]
        }
    }

    renderPlacesList = () => {
        const length = this.state.currentPlacesList.length;
        return this.state.currentPlacesList.map((place, i) => {
            return (
                <React.Fragment>
                    <div className="place-item">
                        <div className="flex-item-info">
                        <a href="#"><i className="fa fa-map-marker fa-3x" aria-hidden="true" onClick={() => this.onPlaceClick(place)}></i></a>
                            <div className="place-info">
                                <div className="place-name">{place.name}</div>
                                <div className="place-address">{place.address}</div>
                            </div>
                        </div>
                        <div className="place-description">{place.description}</div>
                    </div>
                    { length !== i+1 ? <hr></hr> : null }
                </React.Fragment>
            )
        })
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
        console.log(this.state.currentPlace.center);
    }


    render () {
        return (
            <div className="find-tab-body">
                <div className="center-container">
                    <SimpleMap lat={this.state.currentPlace.lat} lng={this.state.currentPlace.lng} name={this.state.currentPlace.name}
                    center={{lat:this.state.currentPlace.lat, lng:this.state.currentPlace.lng}} placesList={this.state.currentPlacesList}
                    />
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
