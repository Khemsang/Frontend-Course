import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { NavLinks } from "../../Constants/NavLinks";
import { Logo } from "../../images";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const Contact = () => {
  const [currentPosition, setCurrentPosition] =
    useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setCurrentPosition({ lat: 27.7172, lng: 85.324 });
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6 border-t-amber-200">
      <div className="flex justify-between container shadow-md">
        <div className="flex items-center gap-3 font-bold text-blue-700">
          <img src={Logo} alt="logo" />
          <span className="text-2xl uppercase">shield</span>
        </div>
        <div>
          <ul className="md:flex gap-8  ">
            {NavLinks.map((item) => (
              <li key={item.id}>
                <a href={item.links}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        {currentPosition && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={13}
            options={{ gestureHandling: "greedy" }}
          >
            <Marker position={currentPosition} />
          </GoogleMap>
        )}
      </LoadScript>

      <div className="bg-white flex-col justify-center rounded-xl shadow-md max-w-xl mx-auto p-9 md:w-full">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-bold text-gray-700 mb-1">Your Name:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="w-100 md:w-full border p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-bold text-gray-700 mb-1">Email:</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="w-100 md:w-full border p-2 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-bold"> Message</label>
            <input
              type="textarea"
              placeholder="Text your message"
              name="message"
              id="message"
              className="w-100 md:w-full border p-2 rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-green-700 "
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
