import React from "react";
const { compose, withProps, lifecycle } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCl7bu7Zninz_LcMD8cuQO5TutrqxNj0z0&v=3.exp&language=en&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        place: null,
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const place = refs.searchBox.getPlaces()[0];
          this.props.getAddressInfo(place);

          this.setState({
            place
          });
        }
      });
    }
  }),
  withScriptjs
)(props => (
  <div data-standalone-searchbox="">
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        required
        type="text"
        placeholder="Enter address"
      />
    </StandaloneSearchBox>
    {/* {props.place && (
      <p>
        Adress : {props.place.formatted_address} <br />
        Location: (Lat: {props.place.geometry.location.lat()}, Lng:{" "}
        {props.place.geometry.location.lng()})
      </p>
    )} */}
  </div>
));

export default PlacesWithStandaloneSearchBox;