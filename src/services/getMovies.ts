import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/movies');
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return `Error: ${error}`;
  }
};

export const getMovie = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/movies/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    return `Error: ${error}`;
  }
};
