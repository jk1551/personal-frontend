import axios from 'axios';

export async function getUser() {
  const response = await axios.get('https://api.github.com/users/jk1551');
  return response.data;
}

