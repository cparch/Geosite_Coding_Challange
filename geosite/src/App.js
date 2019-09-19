import React from 'react';
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps';
import * as locationData from './data/locationData.json';

function Map (){
  return(
    <GoogleMap 
      defaultZoom={13} 
      defaultCenter={{lat: 37.543829, lng: -122.009618}}
    > 

    {locationData.features.map((location) => (
      <Marker
        key={location.properties.LOCATION_ID}
        position={{
          lat: location.geometry.coordinates[1],
          lng: location.geometry.coordinates[0]
        }}
      />
    ))}

    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return  (
    <div style = {{width: '1000px', height: '1000px'}}> 
      <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBpop_xGnr_52PJSdB4R_6tpEjqFlkdZtw`}
      loadingElement = {<div style ={{height: "100%" }} />}
      containerElement={<div style={{ height: "100%" }} />}
      mapElement={<div style={{ height: "100%" }} />}
      />  
    </div>
  )
} 