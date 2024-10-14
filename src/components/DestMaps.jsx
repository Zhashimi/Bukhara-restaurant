import React from "react";
import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import { v4 as uuidv4 } from "uuid";
import markerImage from "../assets/images/logo.jpg";
export const firstBranch = {
  lat: 34.50605980949384,
  lng: 69.14393665548513,
};

export const secondBranch = {
  lat: 34.53004195399269,
  lng: 69.16098642493944,
};
export const DestMaps = () => {
  const id2 = uuidv4();
  const id1 = uuidv4();
  return (
    <>
      {" "}
      <Map
        className="map-container"
        mapId={id2}
        defaultCenter={secondBranch}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={firstBranch} mapId={id1}>
          <img
            src={markerImage}
            width={32}
            height={32}
            style={{ borderRadius: "1rem" }}
          />
        </AdvancedMarker>
        <AdvancedMarker position={secondBranch} mapId={id1}>
          <img
            src={markerImage}
            width={32}
            height={32}
            style={{ borderRadius: "1rem" }}
          />
        </AdvancedMarker>
      </Map>
      <p className="address">
        📍Qowai Markaz, besides Malalay Hospital Kabul Afghanistan{" "}
      </p>
      <p className="address">
        {" "}
        📍Karte 4, first street Shah sultan Tower Kabul Afghanistan
      </p>
    </>
  );
};
