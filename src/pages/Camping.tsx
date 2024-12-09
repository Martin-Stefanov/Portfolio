import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";

const Camping = () => {
  const campingSpots = [
    {
      name: "Peneda-Gerês National Park",
      coordinates: [41.7208, -8.1406] as LatLngExpression,
      description: "Beautiful park with lush greenery.",
    },
    {
      name: "Arrábida Natural Park",
      coordinates: [38.4906, -8.9879] as LatLngExpression,
      description: "Stunning beaches and scenic views.",
    },
  ];
  const position: [number, number] = [39.5, -8.0];
  return (
<div className="flex justify-center relative w-full h-full ">
<MapContainer
        center={position} // Centered on Portugal
        zoom={7} // Adjust the zoom level
        className="h-2/3 w-[25%] border-2 border-black rounded-lg mt-20 shadow-2xl shadow-gray-600 transition-shadow"
        // style={{ height: "600px", width: "100%" }}
      >
        {/* TileLayer determines the map design */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}.jpg"
        />

        {/* Markers */}
        {campingSpots.map((spot, idx) => (
          <Marker key={idx} position={spot.coordinates}>
            <Popup>
              <h3 className="font-bold">{spot.name}</h3>
              <p>{spot.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
</div>
      
  
  );
};

export default Camping;
