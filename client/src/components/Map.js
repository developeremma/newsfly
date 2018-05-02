import React from "react";
import PropTypes from 'prop-types'

import {
   withScriptjs,
   withGoogleMap,
   GoogleMap,
   Circle
  } from "react-google-maps";

  const demoFancyMapStyles = require("../customMap/fancyMap.json");

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 39.201750, lng: -98.854034 }} 
      defaultOptions={{ styles: demoFancyMapStyles }}  

    >

    {props.cities.map(city => (
        
        <Circle
        key= {city._id}
        options={
            {strokeOpacity: 0.5,
            strokeWeight: 2,
            fillColor: '#48a1ec',
            strokeColor: '#48a1ec',
            fillOpacity: 0.5,
            center: {lat: parseFloat(city.coordinates.lat), lng: parseFloat(city.coordinates.long)},
            radius: city.magnitude * 10000
            }
        }
    
      />
    ))}
      
       {/* <Marker
      position={{ lat: 45.5231, lng: -122.6765 }}
    /> */}
    </GoogleMap>
  ))

  MapWithAMarker.propTypes = {
    cities: PropTypes.array.isRequired, 
}


  
export default MapWithAMarker
