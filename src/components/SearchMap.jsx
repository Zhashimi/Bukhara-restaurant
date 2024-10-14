import React from "react";
import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import Direction from "./Direction";
import { v4 as uuidv4 } from "uuid";
import markerImage from "../assets/images/logo.jpg";
import { firstBranch } from "./DestMaps";
const SearchMap = () => {
  const id1 = uuidv4();
  return (
    <Map
      className="map-container"
      defaultCenter={firstBranch}
      defaultZoom={14}
      gestureHandling={"greedy"}
      disableDefaultUI={false}
      mapId={id1}
    >
      <Direction />
      <AdvancedMarker position={firstBranch} mapId={id1}>
        <img
          src={markerImage}
          width={32}
          height={32}
          style={{ borderRadius: "1rem" }}
        />
      </AdvancedMarker>
    </Map>
  );
};

export default SearchMap;
