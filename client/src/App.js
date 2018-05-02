import React, { Component } from 'react';
import Trends from './components/Trends'
import Navbar from './components/Navbar'
//import MapWithAMarker from './components/Map'
import ParentMap from './components/ParentMap'
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
       
        <Navbar />
        <ParentMap />
        {/* <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwAMVJZ7_k6WW_jCgwBDI43nR_VNOJsmg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div id="map" />}
          mapElement={<div style={{ height: `100%` }} />}
        /> */}
        <Trends />
      </div>
    )
  }
}

export default App;
