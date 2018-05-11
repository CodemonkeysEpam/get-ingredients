import React from 'react';
import SimpleMap from '../GoogleMap/GoogleMap';
import './FindLocationTab.scss';
import Place from '../Place/Place';

export default class FindLocationTab extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPlacesList: this.props.list,
            searchPlaceQuery: "",
            currentPlace: null,
            hoverPlace: null
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            currentPlacesList: nextProps.list
        };
    }

    renderPlacesList = () => {
        const length = this.state.currentPlacesList.length;
        return this.state.currentPlacesList.map((place, i) => {
            return (
                <React.Fragment key={i}>
                    {/* <div onMouseEnter={() => this.onPlaceHover(place)} onMouseLeave={() => this.onPlaceHover(null)} className="place-item">
                        <div className="flex-item-info">
                        <i className="fa fa-map-marker fa-3x" aria-hidden="true" onClick={() => this.onPlaceClick(place)}></i>
                            <div className="place-info">
                                <div className="place-name">{place.name}</div>
                                <div className="place-address">{place.address}</div>
                            </div>
                        </div>
                        <div className="place-description">{place.description}</div>
                    </div> */}
                    <Place
                        MouseEnter={() => this.onPlaceHover(place)}
                        MouseLeave={() => this.onPlaceHover(null)}
                        Click={() => this.onPlaceClick(place)}
                        name={place.name}
                        address={place.address}
                        description={place.description}
                    />
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
    }

    onPlaceHover = (place) => {
        this.setState({
            hoverPlace: place
        });
    }


    render () {
        return (
            <React.Fragment>
                <div className="center-container">
                    <SimpleMap 
                    places={this.state.currentPlacesList}
                    currentPlace={this.state.currentPlace}
                    hoverPlace={this.state.hoverPlace}
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
            </React.Fragment>
        );
    }
}
