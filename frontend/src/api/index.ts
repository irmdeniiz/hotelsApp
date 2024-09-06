import axios from "axios";
import { Params } from "react-router-dom";

// base url'e sahip bir axios örneği oluşturduk
const api = axios.create({ baseURL: "http://localhost:4001" });

// bütün konaklama yerlerini getiren fonk.
export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);
