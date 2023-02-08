import React, { useEffect, useState } from "react";
import { View, Text, Alert, Platform, PermissionsAndroid } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

const CurrentLocation = (props) => {
  const [latitude, setLatitude] = useState(
    props.route.params.location.coords.latitude
  );
  const [longitude, setLongitude] = useState(
    props.route.params.location.coords.longitude
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        ></Marker>
      </MapView>
    </View>
  );
};

export default CurrentLocation;
