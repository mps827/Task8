import classes from "./style/BaseLocationPicker.module.scss";
import React, { useState } from "react";

import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 35.74348742792657, lng: 51.37102383086456 };
const DefaultZoom = 11;
const BaseLocationPicker = () => {
  const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

  const [location, setLocation] = useState(defaultLocation);
  const [zoom, setZoom] = useState(DefaultZoom);

  const handleChangeLocation = (lat: number, lng: number) => {
    setLocation({ lat: lat, lng: lng });
  };

  const handleChangeZoom = (newZoom: number) => {
    setZoom(newZoom);
  };

  const handleResetLocation = () => {
    setDefaultLocation({ ...DefaultLocation });
    setZoom(DefaultZoom);
  };

  return (
    <div className={" bg-white " + classes.LocationContainer}>
      <MapPicker
        defaultLocation={defaultLocation}
        zoom={zoom}
        style={{ height: "400px" }}
        onChangeLocation={handleChangeLocation}
        onChangeZoom={handleChangeZoom}
        apiKey="AIzaSyD07E1VvpsN_0FvsmKAj4nK9GnLq-9jtj8"
      />
    </div>
  );
};
export default BaseLocationPicker;
