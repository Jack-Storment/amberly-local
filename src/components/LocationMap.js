import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const BeerEmoji = () => <span role="img" ariaLabel="BeerIcon" style={{fontSize: 50}}>🍻</span>;

class LocationMap extends Component {
    static defaultProps = {
        center: {
            lat: 35.830850,
            lng: -78.908385,
        },
        zoom: 16
    }
    render() {
        return (
          // Important! Always set the container height explicitly
          <div style={{ height: '40vh', width: '100%' }}>
            <GoogleMapReact
              /* ALERT: It's not best practice to put the keys hardcodede in our application.
                 In this case, we are doing it for the sake of the small project / use case.*/
              bootstrapURLKeys={{ key: "AIzaSyA_ZuCUIiGM3xiT5bo3hRx4bTkqZisaEWQ" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
                <BeerEmoji lat={35.830850} lng={-78.908385} />
            </GoogleMapReact>

          </div>
        );
      }
}

export default LocationMap;