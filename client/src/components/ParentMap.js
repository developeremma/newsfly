import React, { Component } from "react";
import API from '../utils/API'
import ChildMap from './Map'

class ParentMap extends Component {
    state = {
        cities: [],
        city_trend: []
    }

    componentWillMount() {
        this.loadCities();

    }

    loadCities = () => {
        API.getCities()
          .then(res => {
            this.setState({ cities: res.data })
          })
          .catch(err => console.log(err));
      };
  
    render() {
      return (
        <ChildMap
          cities={this.state.cities}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwAMVJZ7_k6WW_jCgwBDI43nR_VNOJsmg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div id="map" />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      )
    }
  }

  export default ParentMap