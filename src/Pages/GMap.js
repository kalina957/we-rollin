import React, { Component } from 'react';
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';
import * as parksData from "../data/skateboard-parks.json";

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class GMap extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude:null,
            longitude:null,
            userAddress:null,
        
        };
        this.getLocation= this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.getLocation()
        }
        
        getLocation(){
            if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
            }else{
        alert("Geolocation is not supported by this browser");
            }
        }
        getCoordinates(position){
        console.log(position);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        }
        )
        }
        
        handleLocationError(error){
                switch(error.code){
                    case error.PERMISSION_DENIED:
                        alert("User denied request for geolocation")
                        break;
                        case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable")
                        break;
                        case error.TIMEOUT:
                        alert( "The request to get user location has timed out")
                        break;
                        case error.UNKNOWN_ERROR:
                        alert( "An unknown error occurred")
                        break;
                        default:
                            alert( "An unknown error occurred")
            }
        }
        
        render() {
          return (
              <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{ lat:45.421532, lng:-75.697189}}
              >
                    {parksData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0]
          }}
          icon={{
            url: `/skateboarding.svg`,
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}
      <Marker position={{lat:45.3,lng:-75.7}}></Marker>
              </Map>
          );
        }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAl4ta6kUlFXU9cL2ga_QdPiy6ctNtnqQM'
})(GMap);

