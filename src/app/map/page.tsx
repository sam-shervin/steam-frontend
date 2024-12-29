"use client";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Navbar from "@/components/Navbar";

const MapWithSearch = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set Mapbox access token
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || "";

    // Initialize the map
    if (!mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [80.1534, 12.8406], // Default center coordinates [lng, lat]
      zoom: 9, // Default zoom level
    });

    // Add click event listener to the map
    mapRef.current.on("click", (e) => {
      const { lng, lat } = e.lngLat;

      // Remove existing marker if any
      if (marker) marker.remove();

      // Add new marker
      const newMarker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(mapRef.current!);

      setMarker(newMarker);

      // Log coordinates
      console.log("Marker placed at:", { lat, lng });
    });

    return () => {
      mapRef.current?.remove();
    };
  }, [marker]); // Ensure the effect runs when the marker changes

  // Handle search functionality
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          searchQuery
        )}.json?access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center;

        // Move map to searched location
        mapRef.current?.flyTo({ center: [lng, lat], zoom: 12 });

        // Remove existing marker
        if (marker) marker.remove();

        // Add new marker at searched location
        const newMarker = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(mapRef.current!);

        setMarker(newMarker);

        // Log coordinates
        console.log("Searched location:", { lat, lng });
      } else {
        alert("Location not found.");
      }
    } catch (error) {
      console.error("Error searching location:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 md:m-0 m-4">
        {/* Map Section */}
        <div className="flex-1 h-[66.67vh] md:h-auto">
          <div
            ref={mapContainerRef}
            className="w-full h-full bg-white"
            style={{ minHeight: "500px" }}
          />
        </div>

        {/* Search Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/3 p-6 bg-gray-200">
          <h2 className="text-2xl font-semibold mb-4">Search Location</h2>
          <form onSubmit={handleSearch} className="w-full max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter a city or address"
              className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MapWithSearch;
