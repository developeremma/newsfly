import React, { Component } from "react";

import ChildMap from './Map'

const ParentMap = props => (
    <ChildMap
          cities={props.cities}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwAMVJZ7_k6WW_jCgwBDI43nR_VNOJsmg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div id="map" />}
          mapElement={<div style={{ height: `100%` }} />}
          handleCircleOnClick={props.handleCircleOnClick}
        />
)


  export default ParentMap