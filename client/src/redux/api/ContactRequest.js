import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

export const sendContact = (data) => API.post('/contact/', data);
