import React from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import SearchMap from "../components/SearchMap";
import { DestMaps } from "../components/DestMaps";
const apiKey = import.meta.env.VITE_API_KEY;

const Locations = () => {
  return (
    <APIProvider>
      <section className="container">
        <SearchMap />
        <DestMaps />
      </section>
    </APIProvider>
  );
};

export default Locations;
