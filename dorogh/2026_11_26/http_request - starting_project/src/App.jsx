import { useRef, useState, useCallback, useEffect } from 'react';
 
import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import { getPlaces, updatePlaces } from './http.js';
 
function App() {
  const selectedPlace = useRef();
 
  const [userPlaces, setUserPlaces] = useState([]);
 
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  useEffect(() => {
    async function fetchPlaces() {
      const data = await getPlaces("http://localhost:3000/user-places");
      setUserPlaces(data.places);
    }
 
    fetchPlaces();
  }, []);
 
  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }
 
  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }
 
  async function handleSelectPlace(selectedPlace) {
    if (await updateUserPlaces(selectedPlace) == false) {
      return;
    }
 
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
 
  }
 
  async function updateUserPlaces(selectedPlace) {
    try {
      await updatePlaces({ places: [selectedPlace, ...userPlaces] });
      return true;
    }
    catch (error) {
      return false;
    }
  }
 
  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    await updatePlaces({ places: userPlaces.filter(p => p.id != selectedPlace.current.id) });
 
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter(
        place => place.id != selectedPlace.current.id
      )
    );
 
    setModalIsOpen(false);
  }, [userPlaces]);
 
  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
 
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
 
        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}
 
export default App;
 
 