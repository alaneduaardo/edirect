import axios from "axios";
import constants from '../constants';

const loggedUser = JSON.parse(localStorage.getItem('edirect-loggedUser'));
const token = loggedUser ? loggedUser.token : null;

const api = axios.create({
  baseURL: constants.API_URL_BASE,
  headers: {'Authorization': `Bearer ${token}`}
});

export default api;
