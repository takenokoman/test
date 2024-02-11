/* src/App.js */
import 'bulma/css/bulma.css'
import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Footer from '../components/Footer'
import mapStyles from "../mapUtils/mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    height: "80vh",
    maxWidth: 400,
    margin: "0 auto",
};
const style = {
    position: "fixed",
    bottom: 50,
    left: 0,
    right: 0
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    keyboardShortcuts: false,
    zoomControl: false,
    gestureHandling: "greedy"
};
const Map = () => {
    const ref = React.useRef(null);
    const [map, setMap] = useState();
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB6JSPyFGo8a5dGHasMaVxnLLgkpQ7su0o",
        libraries,
    });

    useEffect(() => {}, )

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const iconSize = "1x";
    const render = (status) => {
        return <h1>{status}</h1>;
    };

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div>
            <div style={style}>
                <GoogleMap
                    id="map"
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    // デフォルトズーム倍率を指定します。
                    center={{
                        lat: 35.2652,
                        lng: 139.3833,
                    }}
　　    　　        // 札幌周辺にデフォルトのセンターを指定しました。
                    options={options}
                    onLoad={onMapLoad}
                >
                </GoogleMap>
            </div>
            <Footer />
        </div>
    )
}

const styles = {
    title: { width: "100%", maxWidth: 400, margin: '0 auto', padding: 0, position: "fixed", left: 0, right: 0 },
}

export default Map
//<button className="button"><FontAwesomeIcon icon={["fal", "camera-viewfinder"]} style={styles.icon} size={iconSize} /></button>
