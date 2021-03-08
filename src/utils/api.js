import axios from 'axios';

const BASE_URL = `https://stormy-badlands-73681.herokuapp.com`;

const instance = axios.create({
  baseURL: BASE_URL,
});

const api = {
  user: {
    getUsers: () => instance.get(`/user`),
    getRecipes: () => instance.get(`/recipe`),
  },
};

export default api;
