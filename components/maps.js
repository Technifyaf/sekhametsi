import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component  {
	render() {
		return (
			<Map google={this.props.google}
			style={style}
			initialCenter={{
			  lat: 40.854885,
			  lng: -88.081807
			}}
			zoom={15}
			onClick={this.onMapClicked}

            >
			
				
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBRFVs5sFujkcS2h0jStvb67s_qWL__cok',
})(MapContainer);


const style = {
    width: '100%',
    height: '100%'
  }

  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }