import axios from 'axios';

export async function fetchForces() {
  const baseURL = 'https://data.police.uk/api/forces';
  // const baseURL = 'https://api.themoviedb.org/3/movie/popular';
  try {
    const response = await axios.get(baseURL);

    console.log('response: ' + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSpecificForce(force) {
  const baseURL = 'https://data.police.uk/api/' + force + '/neighbourhoods';

  try {
    const response = await axios.get(baseURL);

    console.log('fetchSpecificForce: ' + JSON.stringify(response.data));
    return response.data.sort(function (a, b) {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    });
  } catch (error) {
    console.error(error);
  }
}

export async function fetchNeighbourhoodDetails(force, id) {
  const baseURL = 'https://data.police.uk/api/' + force + '/' + id;
  console.log('fetchNeighbourhoodDetails url is: ' + baseURL);
  try {
    const response = await axios.get(baseURL);

    console.log('fetchNeighbourhoodDetails: ' + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
