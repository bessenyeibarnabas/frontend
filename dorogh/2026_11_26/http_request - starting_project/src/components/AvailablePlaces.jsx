import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import { getPlaces } from '../http.js';
 
export default function AvailablePlaces({ onSelectPlace }) {
  const [AvailablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    async function fetchPlaces() {
      try {
        const data = await getPlaces("http://localhost:3000/places");
        setAvailablePlaces(data.places);
      }
      catch (err) {
        setError(err);
      }
    }
    fetchPlaces();
  }, []);
 
  if (error) {
    return <ErrorMessage title="An error occured" message={error.message} />
  }
 
  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
 
 