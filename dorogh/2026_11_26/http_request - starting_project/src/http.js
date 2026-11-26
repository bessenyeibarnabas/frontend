export async function getPlaces(url) {
  const response = await fetch(url);
 
  if (!response.ok) {
    throw new Error('Failed to fetch places.');
  }
 
  const data = await response.json();
  return data;
}
 
export async function updatePlaces(bodyContent) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify(bodyContent),
    headers: {
      'Content-Type': 'application/json'
    }
  });
 
  if (!response.ok) {
    throw new Error('Failed to update places.');
  }
 
  const data = await response.json();
  return data;
}