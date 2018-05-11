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
        placeholder="Enter adress"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`
        }}
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