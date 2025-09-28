import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

// Fetch all films
export const fetchFilms = async () => {
  const res = await axios.get(`${baseUrl}/films/`);
  return res.data.results;
};

// Fetch a single Films
export const fetchFilmById = async (id:string) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.get(`${baseUrl}/films/${id}/`);
  return res.data;
};

// Fetch all StarShip
export const fetchStarShip = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.get(`${baseUrl}/starships/`);
  return res.data.results;
};

// Fetch a single StartShip
 export const fetchStarShipById = async (id:string) => {
   const baseUrl = import.meta.env.VITE_BASE_URL;
   const res = await axios.get(`${baseUrl}/starships/${id}/`);
   return res.data;
};
 
// Fetch all People
export const fetchPeople = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.get(`${baseUrl}/people/`);
  return res.data.results;
};

// Fetch a single People
export const fetchPeopleById = async (id:string) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.get(`${baseUrl}/people/${id}/`);
  return res.data;
};

// Fetch all Species
export const fetchSpecies = async () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const res = await axios.get(`${baseUrl}/species/`);
  return res.data.results;
};

// Fetch a single Species
 export const fetchSpeciesById = async (id:string) => {
   const baseUrl = import.meta.env.VITE_BASE_URL;
   const res = await axios.get(`${baseUrl}/species/${id}/`);
   return res.data;
 };