import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { Component } from 'react'
import MapGL from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'

/*function getAccessToken() {
    var accessToken = null;

    if (typeof window !== 'undefined' && window.location) {
        var match = window.location.search.match(/access_token=([^&\/]*)/);
        accessToken = match && match[1];
    }

    if (!accessToken && typeof process !== 'undefined') {
        // Note: This depends on bundler plugins (e.g. webpack) inmporting environment correctly
        accessToken = accessToken || process.env.MapboxAccessToken; // eslint-disable-line
    }

    return accessToken || null;
}*/

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
//const MAPBOX_TOKEN = getAccessToken()

const MAPBOX_TOKEN = "pk.eyJ1IjoicGVycnkxMjQiLCJhIjoiY2szYzFkYTRjMHJjZzNpcWxjNWM1bDFvMSJ9.y8hoT6mkGKY-tjcjN9K9aQ"

class Example extends Component {
    state = {
        viewport: {
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    }

    mapRef = React.createRef()

    handleViewportChange = (viewport) => {
        this.setState({
            viewport: { ...this.state.viewport, ...viewport }
        })
    }

    // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
    handleGeocoderViewportChange = (viewport) => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 }

        return this.handleViewportChange({
            ...viewport,
            ...geocoderDefaultOverrides
        })
    }

    render() {
        return (
            <MapGL
                ref={this.mapRef}
                {...this.state.viewport}
                width="100%"
                height="100%"
                onViewportChange={this.handleViewportChange}
                mapboxApiAccessToken={MAPBOX_TOKEN}>
                <Geocoder
                    mapRef={this.mapRef}
                    onViewportChange={this.handleGeocoderViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                />
            </MapGL>
        )
    }
}

export default Example