import axios from 'axios';

const BASE_URL = `https://stormy-badlands-73681.herokuapp.com`;

const instance = axios.create({
  baseURL: BASE_URL,
});

const api = {
  user: {
    getUsers: () => instance.get(`/user`),
    deleteUser: (id) => instance.delete(`/user/${id}`),
    postUser: (obj) => instance.post(`/user/`, obj),
    putUser: (id, obj) => instance.put(`/user/${id}`, obj),
  },
  recipe: {
    getRecipes: () => instance.get(`/recipe`),
    deleteRecipe: (id) => instance.delete(`/recipe/${id}`),
    postRecipe: (obj) => instance.post('/recipe', obj),
    putRecipe: (id, obj) => instance.put(`/recipe/${id}`, obj),
  },
  category: {
    getCaterories: () => instance.get(`/category`),
    deleteCategory: (id) => instance.delete(`/category/${id}`),
    postCategory: (obj) => instance.post('/category', obj),
    putCategory: (id, obj) => instance.put(`/category/${id}`, obj),
  },
};

export default api;
