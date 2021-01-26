const API_KEY = '19141358-bb46b5eb9dddc73023fff1d28';
const BASE_URL = 'https://pixabay.com/api';

async function fetchImagesAPI({ imageName, currentPage }) {
  const searchQuery = `?q=${imageName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}`);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    return error('Some error in fetch');
  }
}

const api = {
  fetchImagesAPI,
};

export default api;