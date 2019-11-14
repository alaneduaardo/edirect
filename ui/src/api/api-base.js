import axios from "axios";
import constants from '../constants';

const loggedUser = JSON.parse(localStorage.getItem('edirect-loggedUser'));
const token = loggedUser ? loggedUser.token : null;

let clientOptions = {
  baseURL: constants.API_URL_BASE,
}

if(token) {
  clientOptions.headers = {'Authorization': `Bearer ${token}`};
}

const api = axios.create(clientOptions);

export default api;
