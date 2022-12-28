import axios from 'axios';

export async function fetchForces() {
  // const baseURL = 'https://data.police.uk/api/forces';
  const baseURL = 'https://api.themoviedb.org/3/movie/popular';
  try {
    const response = await axios.get(baseURL, {
      params: {
        api_key: 'd856bb22e63d3f01cf387f814780216b',
      },
    });

    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
