import { OverlayView } from "@react-google-maps/api";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import { toast } from "react-toastify";

const Direction = () => {
  const map = useMap();
  const mapLibrary = useMapsLibrary("routes");
  const [destination, setDestination] = useState(
    "Bukhara Restaurant - Karte 4 Branch, Kabul, Afghanistan"
  );
  const [start, setStart] = useState("Darulaman, Kabul, Afghanistan");
  const [directionServices, setDirectionServices] = useState();
  const [directionsRenderer, setDirectionRenderer] = useState();
  const [routes, setRoutes] = useState([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selectedRoute = routes[routeIndex];
  const leg = selectedRoute?.legs[0];
  const handleSubmit = (event) => {
    event.preventDefault();
    setDestination(event.target.destination.value);
    setStart(event.target.start.value);
  };

  useEffect(() => {
    if (!map || !mapLibrary) return;
    setDirectionServices(new mapLibrary.DirectionsService());
    setDirectionRenderer(new mapLibrary.DirectionsRenderer({ map }));
  }, [map, mapLibrary]);

  useEffect(() => {
    if (!directionsRenderer || !directionServices) return;
    directionServices
      .route({
        origin: start,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      })
      .catch((error) => {
        toast.error("Could not find the address you entered");
      });
  }, [directionsRenderer, directionServices, start, destination]);

  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);
  if (!leg) return null;

  return (
    <AddressForm
      start={start}
      destination={destination}
      handleSubmit={handleSubmit}
    />
  );
};

export default Direction;
