import axios from "axios";

const BACKEND = axios.create({
    baseURL: process.env.REACT_APP_BACKEND
})

export default BACKEND;