import axios from "axios";

// axios orqali baseUrl qiymati yuuklab oluvchi api functioni yaratib olindi
export const api = axios.create({
    baseURL: "https://pokeapi.co/api"
});